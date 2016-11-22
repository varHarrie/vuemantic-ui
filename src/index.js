// components
import Modal from './components/Modal'
import Popup from './components/Popup'
import Message from './components/Message'
import Notification from './components/Notification'

// directives
import clickOutside from './directives/clickOutside'

const components = {
  Modal,
  Popup,
  Message,
  Notification
}

const directives = {
  clickOutside
}

function install (Vue) {
  for (let key in components) {
    Vue.component(components[key].name, components[key])
  }
  for (let key in directives) {
    Vue.directive(key, directives[key])
  }
}

module.exports = {components, directives, install}
