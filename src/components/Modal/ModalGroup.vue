<template>
  <div class="ModalGroup">
    <ui-modal
        v-for="modal in modals"
        size='tiny'
        :visible="true"
        :detachable= "modal.detachable"
        :basic="modal.basic"
        :icon="modal.icon"
        :title="modal.title"
        :content="modal.content"
        :actions="modal.actions"
        @on-hidden="remove($index)"></ui-modal>
  </div>
</template>

<script>
  import Modal from './Modal.vue'

  const alertTypes = {
    info: 'blue info circle',
    success: 'green check circle',
    warning: 'orange warning sign',
    error: 'red remove circle'
  }

  const confirmTypes = {
    info: 'blue help circle outline',
    success: 'green help circle outline',
    warning: 'orange help circle',
    error: 'red help circle'
  }

  const defaultModal = {detachable: false}

  export default {
    name: 'ui-modal-group',
    componets: {
      'ui-modal': Modal
    },
    data: () => ({
      modals: []
    }),
    methods: {
      addModal (options = {}) {
        this.modals.push(Object.assign({}, defaultModal, options))
      },
      addAlert (type, title, content, onConfirm, confirmText) {
        this.addModal({
          icon: alertTypes[type],
          title: title,
          content: content,
          actions: [{
            text: confirmText || '确定',
            classname: 'blue',
            onClick: onConfirm || (({hide}) => hide())
          }]
        })
      },
      addConfirm (type, title, content, onConfirm, onCancel, confirmText, cancelText) {
        this.addModal({
          icon: confirmTypes[type],
          title: title,
          content: content,
          actions: [{
            text: confirmText || '确定',
            classname: 'green',
            onClick: onConfirm || (({hide}) => hide())
          }, {
            text: cancelText || '取消',
            classname: 'grey',
            onClick: onCancel || (({hide}) => hide())
          }]
        })
      },
      remove (index) {
        this.modals.splice(index, 1)
      }
    }
  }
</script>

<style lang="stylus">
  .ModalGroup
    position: relative
    z-index: 1001
</style>