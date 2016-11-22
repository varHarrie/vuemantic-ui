import Vue from 'vue'
import Message from './Message.vue'
import MessageGroup from './MessageGroup.vue'

let messageGroup

function getMessageGroup () {
  if (!messageGroup) {
    const MessageGroupConstructor = Vue.extend(MessageGroup)
    messageGroup = new MessageGroupConstructor()
    messageGroup.vm = messageGroup.$mount()
    document.body.appendChild(messageGroup.vm.$el)
  }
  return messageGroup
}

Vue.prototype.$msg = function (options) { getMessageGroup().addMessage(options) }

Vue.prototype.$msg.info = function (...args) { getMessageGroup().addSimpleMessage('info', ...args) }
Vue.prototype.$msg.warning = function (...args) { getMessageGroup().addSimpleMessage('warning', ...args) }
Vue.prototype.$msg.success = function (...args) { getMessageGroup().addSimpleMessage('positive', ...args) }
Vue.prototype.$msg.error = function (...args) { getMessageGroup().addSimpleMessage('negative', ...args) }

Message.MessageGroup = MessageGroup

export default Message
