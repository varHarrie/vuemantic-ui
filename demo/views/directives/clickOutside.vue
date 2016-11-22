<template>
  <div class="page">
    <div class="markdown" v-html="md"></div>
    <div class="demos">
      <h2>demos</h2>
      <example title="clickOutside">
        <button class="ui button" v-click-outside="click">点击按钮之外触发事件</button>
        <template slot="extra">
          export default {
            methods: {
              click () {
                this.$msg('触发事件')
              }
            }
          }
        </template>
      </example>
    </div>
  </div>
</template>

<script>
  import md from './clickOutside.md'

  export default {
    data: () => ({
      md: md
    }),
    methods: {
      click () {
        this.$msg.info('触发事件')
      }
    }
  }
</script>

<style lang="stylus">
</style>