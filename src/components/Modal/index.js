import Vue from 'vue'
import Modal from './Modal.vue'
import ModalGroup from './ModalGroup.vue'

let modalGroup

function getModalGroup () {
  if (!modalGroup) {
    const ModalGroupConstructor = Vue.extend(ModalGroup)
    modalGroup = new ModalGroupConstructor()
    modalGroup.vm = modalGroup.$mount()
    document.body.appendChild(modalGroup.vm.$el)
  }
  return modalGroup
}

Vue.prototype.$modal = function (options) { getModalGroup().addModal(options) }

Vue.prototype.$alert = function (...args) { getModalGroup().addAlert('', ...args) }
Vue.prototype.$alert.info = function (...args) { getModalGroup().addAlert('info', ...args) }
Vue.prototype.$alert.success = function (...args) { getModalGroup().addAlert('success', ...args) }
Vue.prototype.$alert.warning = function (...args) { getModalGroup().addAlert('warning', ...args) }
Vue.prototype.$alert.error = function (...args) { getModalGroup().addAlert('error', ...args) }

Vue.prototype.$confirm = function (...args) { getModalGroup().addConfirm('', ...args) }
Vue.prototype.$confirm.info = function (...args) { getModalGroup().addConfirm('info', ...args) }
Vue.prototype.$confirm.success = function (...args) { getModalGroup().addConfirm('success', ...args) }
Vue.prototype.$confirm.warning = function (...args) { getModalGroup().addConfirm('warning', ...args) }
Vue.prototype.$confirm.error = function (...args) { getModalGroup().addConfirm('error', ...args) }

Modal.ModalGroup = ModalGroup

export default Modal
