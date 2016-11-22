<template>
  <div class="page">
    <div class="markdown" v-html="md"></div>
    <div class="demos">
      <h2>demos</h2>
      <example title="">
        <template slot="extra"></template>
      </example>
    </div>
  </div>
</template>

<script>
  import md from './confirm.md'

  export default {
    data: () => ({
      md: md
    })
  }
</script>

<style lang="stylus">
</style>