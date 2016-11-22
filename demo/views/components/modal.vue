<template>
  <div class="page">
    <div class="markdown" v-html="md"></div>
    <div class="demos">
      <h2>demos</h2>
      <example title="使用actions">
        <button class="ui button" @click="visible=true">Modal:{{visible}}</button>
        <ui-modal :visible.sync="visible" title="标题" :actions="actions">
          <div>内容~~~~~~~~~~</div>
        </ui-modal>
        <template slot="extra">
          export default {
            data: () => ({
              visible: false,
              actions: [
                {
                  text: '3秒后关闭',
                  classname: 'blue labeled icon',
                  icon: 'check mark',
                  onClick: ({hide, start}, action) => {
                    start()
                    setTimeout(() => hide(), 3000)
                  }
                },
                {text: '取消', onClick: ({hide}) => hide()}
              ]
            })
          }
        </template>
      </example>
    </div>
  </div>
</template>

<script>
  import md from './modal.md'

  export default {
    data: () => ({
      md: md,
      visible: false,
      actions: [
        {
          text: '3秒后关闭',
          classname: 'blue labeled icon',
          icon: 'check mark',
          onClick: ({hide, start}, action) => {
            start()
            setTimeout(() => hide(), 3000)
          }
        },
        {text: '取消', onClick: ({hide}) => hide()}
      ]
    })
  }
</script>