import Vue from 'vue'
import Notification from './Notification.vue'
import NotificationGroup from './NotificationGroup.vue'

let notificationGroup

function getNotificationGroup () {
  if (!notificationGroup) {
    const NotificationGroupConstructor = Vue.extend(NotificationGroup)
    notificationGroup = new NotificationGroupConstructor()
    notificationGroup.vm = notificationGroup.$mount()
    document.body.appendChild(notificationGroup.vm.$el)
  }
  return notificationGroup
}

Vue.prototype.$notice = function (options) { getNotificationGroup().addNotification(options) }

Vue.prototype.$notice.info = function (...args) { getNotificationGroup().addSimpleNotification('info', ...args) }
Vue.prototype.$notice.warning = function (...args) { getNotificationGroup().addSimpleNotification('warning', ...args) }
Vue.prototype.$notice.success = function (...args) { getNotificationGroup().addSimpleNotification('success', ...args) }
Vue.prototype.$notice.error = function (...args) { getNotificationGroup().addSimpleNotification('error', ...args) }

Notification.NotificationGroup = NotificationGroup

export default Notification
