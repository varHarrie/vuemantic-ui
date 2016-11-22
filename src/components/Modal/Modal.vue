<template>
  <div class="Modal ui modal" :class="[size,{basic:basic}]" v-el:modal>
    <div class="header"><slot name="header"><i class="icon" v-if="icon" :class="[icon]"></i>{{title}}</slot></div>
    <div class="content"><slot><template v-if="isMultiLine">
      <p v-for="c in content">{{c}}</p>
    </template><template v-else>
      {{content}}
    </template></slot></div>
    <div class="actions"><slot name="actions"><template v-if="actions.length">
      <div class="ui button"
          v-for="action in actions"
          :class="[action.classname,{loading:loading}]"
          :disabled="loading"
          @click="onClick(action)">
        <i class="icon" v-if="action.icon" :class="[action.icon]"></i>
        {{action.text}}
      </div>
    </template></slot></div>
  </div>
</template>

<script>
  import size from '../../mixins/size'
  import transition from '../../mixins/transition'
  export default {
    name: 'ui-modal',
    mixins: [size, transition],
    props: {
      visible: {type: Boolean, default: false},
      icon: {type: String, default: ''},
      title: {type: String, default: ''},
      content: {type: [String, Array], default: ''},
      actions: {type: Array, default: () => ([])},
      basic: {type: Boolean, default: false},
      maskClose: {type: Boolean, default: false},
      loading: {type: Boolean, default: false},
      detachable: {type: Boolean, default: true}
    },
    watch: {
      visible (newVal, oldVal) {
        if (newVal) $(this.modal).modal('show')
        else $(this.modal).modal('hide')
        if (oldVal && !newVal) this.$emit('on-close')
      }
    },
    computed: {
      isMultiLine () { return this.content instanceof Array },
      modal () { return this.$els.modal },
      fns () {
        return {
          show: this.show,
          hide: this.hide,
          start: this.start,
          end: this.end
        }
      }
    },
    ready () {
      $(this.modal).modal({
        detachable: this.detachable,
        transition: this.transition || 'scale',
        closable: this.maskClose,
        dimmerSettings: {onHide: () => this.hide()},
        onHidden: () => this.$emit('on-hidden')
      })
      if (this.visible) $(this.modal).modal('show')
    },
    methods: {
      onClick (action) {
        if (!this.loading && action.onClick) action.onClick(this.fns, action)
        this.$emit('on-action', this.fns, action)
      },
      show () {
        this.visible = true
      },
      hide () {
        this.visible = false
        this.end()
      },
      start () {
        this.loading = true
      },
      end () {
        this.loading = false
      }
    }
  }
</script>

<style lang="stylus">
  .Modal
    overflow: hidden
    .header:empty, .actions:empty
      display: none
    &.tiny, &.mini
      @media only screen and (max-width: 767px)
        width: 95%
        margin: 0 0 0 -47.5%
      @media only screen and (min-width: 768px)
        width: 60.4%
        margin: 0 0 0 -30.2%
      @media only screen and (min-width: 992px)
        width: 480px
        margin: 0 0 0 -240px
      @media only screen and (min-width: 1200px)
        width: 480px
        margin: 0 0 0 -240px
</style>