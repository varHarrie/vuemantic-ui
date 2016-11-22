<template>
  <div class="page">
    <div class="markdown" v-html="md"></div>
    <div class="demos">
      <h2>demos</h2>
      <example title="$notice">
        <button class="ui button" @click="open1()">info（两秒消失，无进度条）</button>
        <button class="ui button" @click="open2()">success</button>
        <button class="ui button" @click="open3()">warning</button>
        <button class="ui button" @click="open4()">error</button>
        <button class="ui button" @click="open5()">normal</button>
        <template slot="extra">
          export default {
            methods: {
              open1 () { this.$notice.info('通知', '你想要注册吗?') },
              open2 () { this.$notice.success('通知', '你已经成功注册！') },
              open3 () { this.$notice.warning('通知', '在这之前你必须先注册！') },
              open4 () { this.$notice.error('通知', '这个账号重复了！') }
            }
          }
        </template>
      </example>
    </div>
  </div>
</template>

<script>
  import md from './notice.md'

  export default {
    data: () => ({
      md: md
    }),
    methods: {
      open1 () { this.$notice.info('通知', '你想要注册吗?', null, 2000, false) },
      open2 () { this.$notice.success('通知', '你已经成功注册！') },
      open3 () { this.$notice.warning('通知', '在这之前你必须先注册！') },
      open4 () { this.$notice.error('通知', '这个账号重复了！') },
      open5 () { this.$notice({title: '通知', content: '马上注册一个账号吧！'}) }
    }
  }
</script>

<style lang="stylus">
</style>