<template>
  <div class="page">
    <div class="markdown" v-html="md"></div>
    <div class="demos">
      <h2>demos</h2>
      <example title="">
        <ui-notification content="内容"></ui-notification>
        <ui-notification icon="big world" title="标题" content="内容"></ui-notification>
        <ui-notification icon="green checkmark circular inverted" title="标题">
          <p>内容1</p>
          <p>内容2</p>
        </ui-notification>
        <ui-notification icon="yellow help circular inverted" title="问个问题" content="你吃早饭了没？" :actions="[{text:'吃了',icon:'check'},{text:'没有'}]" @on-action="onAction"></ui-notification>
        <template slot="extra">
          export default {
            methods: {
              onAction ({hide}, action) {
                console.log(action.text)
                hide()
              }
            }
          }
        </template>
      </example>
    </div>
  </div>
</template>

<script>
  import md from './notification.md'

  export default {
    data: () => ({
      md: md
    }),
    methods: {
      onAction ({hide}, action) {
        console.log(action.text)
        hide()
      }
    }
  }
</script>

<style lang="stylus">
</style>