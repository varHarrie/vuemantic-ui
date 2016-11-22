<template>
  <div class="MessageGroup">
    <div class="MessageGroup__item"
        v-for="msg in messages"
        transition="fade">
      <ui-message compact
        :size="msg.size"
        :color="msg.color"
        :duration="msg.duration"
        @on-timeout="remove($index)">
        <i class="icon" v-if="msg.icon" :class="[msg.icon]"></i>
        {{msg.content}}
        </ui-message>
    </div>
  </div>
</template>

<script>
  import Message from './Message.vue'

  const defaultMessage = {size: 'mini', duration: 5000, icon: 'info circle'}

  export default {
    name: 'ui-message-group',
    components: {
      'ui-message': Message
    },
    data: () => ({
      messages: []
    }),
    methods: {
      addMessage (options = {}) {
        if (options.color === 'success') options.color = 'positive'
        else if (options.color === 'error') options.color = 'negative'
        this.messages.push(Object.assign({}, defaultMessage, options))
      },
      addSimpleMessage (color, content, icon, duration) {
        const options = {color, content}
        if (icon || icon === '') options.icon = icon
        if (duration || duration === 0) options.duration = duration
        this.addMessage(options)
      },
      remove (index) {
        this.messages.splice(index, 1)
      }
    }
  }
</script>

<style lang="stylus">
  @keyframes message-fade-in
    0%
      transform: scale(.9)
    70%
      transform: scale(1.1)
    100%
      transform: scale(1)

  .MessageGroup
    fixed: top 5px left 50%
    z-index: 1001
    text-align: center
    transform: translateX(-50%)
    &__item
      margin-bottom: 5px
      &.fade-transition
        opacity: 1
        max-height: 50px
        transition: all .2s
        animation: message-fade-in .2s
        .Message
          transition: all .2s
      &.fade-enter, &.fade-leave
        opacity: 0
        max-height: 0
        .Message
          padding-top: 0
          padding-bottom: 0
</style>