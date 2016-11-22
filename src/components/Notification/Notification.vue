<template>
  <div class="Notification"
      v-show="visible" transition="fade"
      @mouseenter="clearTimer" @mouseleave="startTimer"
      :style="{width:width}">
    <i class="Notification__close fitted close icon" @click="hide()"></i>
    <div class="Notification__container">
      <i class="Notification__icon icon" v-if="icon" :class="[icon]"></i>
      <div class="Notification__text">
        <p class="Notification__title" v-if="title">{{title}}</p>
        <p class="Notification__content"><slot>{{content}}</slot></p>
      </div>
    </div>
    <div class="Notification__actions" v-if="actions.length">
      <button class="ui basic mini button" v-for="action in actions" @click="onClick(action)">
        <i class="icon" v-if="action.icon" :class="[action.icon]"></i>
        {{action.text}}
      </button>
    </div>
    <div class="Notification__progress" v-if="timer" v-el:progress></div>
  </div>
</template>

<script>
  export default {
    name: 'ui-notification',
    props: {
      visible: {type: Boolean, default: true},
      icon: {type: String, default: ''},
      title: {type: String, default: ''},
      content: {type: String, default: ''},
      duration: {type: Number, default: 0},
      actions: {type: Array, default: () => ([])},
      width: {type: String, default: '330px'},
      progress: {type: Boolean, default: true}
    },
    data: () => ({
      timer: null,
      hidden: false
    }),
    watch: {
      visible (val) {
        this.hidden = false
        if (val) this.$emit('on-show')
        else this.$emit('on-hide')
      }
    },
    computed: {
      fns () {
        return {
          hide: this.hide
        }
      }
    },
    ready () {
      this.startTimer()
    },
    methods: {
      hide () { this.visible = false },
      onClick (action) {
        if (action.onClick) action.onClick(this.fns, action) && this.hide()
        this.$emit('on-action', this.fns, action)
      },
      clearTimer () {
        if (!this.timer || !this.duration) return
        clearTimeout(this.timer)
        this.timer = null
      },
      startTimer () {
        if (this.timer || !this.duration) return

        this.timer = setTimeout(() => {
          if (this.visible) this.hide()
          this.clearTimer()
        }, this.duration)

        if (this.progress) {
          this.$nextTick(() => {
            $(this.$els.progress).css({width: '100%'}).animate({width: '0%'}, this.duration, 'linear')
          })
        }
      }
    },
    transitions: {
      css: false,
      fade: {
        enter (el, done) {
          this._height = $(el).height('auto').outerHeight() + 'px'
          this._paddingTop = $(el).css('paddingTop')
          this._paddingBottom = $(el).css('paddingBottom')
          this._marginTop = $(el).css('marginTop')
          this._marginBottom = $(el).css('marginBottom')
          $(el).css({
            height: 0,
            opacity: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0
          }).animate({
            opacity: 1,
            height: this._height,
            paddingTop: this._paddingTop,
            paddingBottom: this._paddingBottom,
            marginTop: this._marginTop,
            marginBottom: this._marginBottom
          }, 200, done)
          done()
        },
        leave (el, done) {
          this._height = $(el).height('auto').outerHeight() + 'px'
          this._paddingTop = $(el).css('paddingTop')
          this._paddingBottom = $(el).css('paddingBottom')
          this._marginTop = $(el).css('marginTop')
          this._marginBottom = $(el).css('marginBottom')
          $(el).css({
            opacity: 1,
            height: this._height,
            paddingTop: this._paddingTop,
            paddingBottom: this._paddingBottom,
            marginTop: this._marginTop,
            marginBottom: this._marginBottom
          }).animate({
            opacity: 0,
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0
          }, 200, done)
        },
        afterLeave (el) {
          $(el).removeAttr('style').css({display: 'none'})
          if (!this.hidden) {
            this.hidden = true
            this.$emit('on-hidden')
          }
        }
      }
    }
  }
</script>

<style lang="stylus">
  .Notification
    position: relative
    padding: 15px
    margin-bottom: 10px
    overflow: hidden
    border-radius: 4px
    background: white
    box-shadow: 0 1px 3px 0 #D4D4D5,0 0 0 1px #D4D4D5
    transition: box-shadow .2s
    &__close
      absolute: top 5px right 5px
      cursor: pointer
      color: #999
    &__container
      display: flex
      align-items: center
    &__icon
      margin-right: 10px !important
    &__text
      flex: 1
    &__title
      margin-bottom: 5px
    &__content
      color: #999
    &__actions
      float: right
      margin-top: 5px
    &__progress
      absolute: bottom 0 left 0
      size: 0 2px
      background: #ddd
    &:hover
      box-shadow: 0 0 0 1px #D4D4D5,0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)
</style>