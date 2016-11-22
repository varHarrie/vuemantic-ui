<template>
  <div class="NotificationGroup">
    <ui-notification
        v-for="notification in notifications"
        :visible="true"
        :icon="notification.icon"
        :title="notification.title"
        :content="notification.content"
        :duration="notification.duration"
        :progress="notification.progress"
        @on-hidden="remove($index)">
    </ui-notification>
  </div>
</template>

<script>
  import Notification from './Notification.vue'

  const defaultNotification = {duration: 6000}

  const types = {
    'info': 'teal info circular inverted',
    'success': 'green checkmark circular inverted',
    'warning': 'yellow warning circular inverted',
    'error': 'red close circular inverted'
  }

  export default {
    name: 'ui-notification-gourp',
    components: {
      'ui-notification': Notification
    },
    data: () => ({
      notifications: []
    }),
    methods: {
      addNotification (options = {}) {
        this.notifications.push(Object.assign({}, defaultNotification, options))
      },
      addSimpleNotification (type, title, content, actions, duration, progress) {
        const options = {icon: types[type], title, content}
        if (actions && actions instanceof Array) options.actions = actions
        if (duration || duration === 0) options.duration = duration
        if (progress === false) options.progress = progress
        this.addNotification(options)
      },
      remove (index) {
        this.notifications.splice(index, 1)
      }
    }
  }
</script>

<style lang="stylus">
  .NotificationGroup
    fixed: top 10px right 10px
    z-index: 1001
</style>