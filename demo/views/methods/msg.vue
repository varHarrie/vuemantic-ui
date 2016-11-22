<template>
  <div class="page">
    <div class="markdown" v-html="md"></div>
    <div class="demos">
      <h2>demos</h2>
      <example title="">
        <button class="ui button" @click="open1()">info</button>
        <button class="ui button" @click="open2()">success</button>
        <button class="ui button" @click="open3()">warning</button>
        <button class="ui button" @click="open4()">error</button>
        <template slot="extra">
          export default {
            methods: {
              open1 () { this.$msg.info('你想要注册吗?', 'help circle', 8000) },
              open2 () { this.$msg.success('你已经成功注册！', 'check circle') },
              open3 () { this.$msg.warning('在这之前你必须先注册！') },
              open4 () { this.$msg.error('这个账号重复了！') }
            }
          }
        </template>
      </example>
    </div>
  </div>
</template>

<script>
  import md from './msg.md'

  export default {
    data: () => ({
      md: md
    }),
    methods: {
      open1 () { this.$msg.info('你想要注册吗?', 'help circle', 8000) },
      open2 () { this.$msg.success('你已经成功注册！', 'check circle') },
      open3 () { this.$msg.warning('在这之前你必须先注册！') },
      open4 () { this.$msg.error('这个账号重复了！') }
    }
  }
</script>

<style lang="stylus">
</style>