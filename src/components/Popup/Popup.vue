<template>
  <div class="Popup" @mouseenter="hover=true" @mouseleave="hover=false" v-click-outside="onClickOutside">
    <div class="Popup-place" @click="toggle()">
      <slot></slot>
    </div>
    <div class="ui flowing popup visible" v-show="visible" transition="fade" :class="[placement,{noPadding:noPadding,basic:basic}]">
      <slot name="content">
        <div class="header" v-if="title">{{title}}</div>
        <div class="content">{{content}}</div>
        <div class="ui divider" v-if="actions.length"></div>
        <div class="actions" v-if="actions.length">
          <div class="ui tiny button"
              v-for="action in actions"
              :class="[action.classname, {loading:loading}]"
              :disabled="loading"
              @click="onClick(action)">
            <i class="icon" v-if="action.icon" :class="[action.icon]"></i>
            {{action.text}}
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  import clickOutside from '../../directives/clickOutside'
  export default {
    name: 'ui-popup',
    directives: {
      clickOutside
    },
    props: {
      visible: {type: Boolean, default: false},
      disabled: {type: Boolean, default: false},
      title: {type: String, default: false},
      content: {type: String, default: ''},
      placement: {type: String, default: 'top left'},
      on: {type: String, default: 'hover', validator: (val) => ['hover', 'click'].indexOf(val) >= 0},
      actions: {type: Array, default: () => ([])},
      loading: {type: Boolean, default: false},
      noPadding: {type: Boolean, default: false},
      basic: {type: Boolean, default: false}
    },
    data: () => ({
      hover: false
    }),
    computed: {
      fns () {
        return {
          show: this.show,
          hide: this.hide,
          enable: this.enable,
          disable: this.disable,
          start: this.start,
          end: this.end
        }
      }
    },
    watch: {
      hover (val) {
        if (this.on !== 'hover') return
        if (val) this.show()
        else this.hide()
      }
    },
    methods: {
      show () { if (!this.disabled) this.visible = true },
      hide () { this.visible = false },
      enable () { this.disabled = false },
      disable () { this.disabled = true },
      start () { this.loading = true },
      end () { this.loading = false },
      toggle () {
        if (this.visible) this.hide()
        else this.show()
      },
      onClickOutside () {
        if (this.on !== 'click') return false
        this.hide()
      },
      onAction (action) {
        if (this.disabled || this.loading) return
        if (action.onClick) action.onClick(this.fns, action)
        this.$emit('on-action', this.fns, action)
      }
    }
  }
</script>

<style lang="stylus">
  size = .71428571em
  .Popup
    position: relative
    display: inline-block
    .ui.popup
      left: auto
      top: auto
      right: auto
      bottom: auto
      white-space: nowrap
      .actions
        float: right
      &.fade-transition
        opacity: 1
        transition: all .15s
      &.fade-enter, &.fade-leave
        opacity: 0
      &.top.left
        bottom: 100%
        left: 0
      &.top.right
        bottom: 100%
        right: 0
      &.bottom.left
        top: 100%
        left: 0
      &.bottom.right
        top: 100%
        right: 0
      &.center.left
        bottom: 50%
        right: 100%
        transform: translateY(50%)
      &.center.right
        bottom: 50%
        left: 100%
        transform: translateY(50%)
      &.center.top
        bottom: 100%
        right: 50%
        transform: translateX(50%)
      &.center.bottom
        top: 100%
        right: 50%
        transform: translateX(50%)
      &.noPadding
        padding: 0
      &.basic
        border-radius: 2px
        &.fade-enter, &.fade-leave
          transform: scale(.8)
        &:after
          display: none
</style>
