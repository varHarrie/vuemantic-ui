<template>
  <div class="page">
    <div class="markdown" v-html="md"></div>
    <div class="demos">
      <h2>demos</h2>
      <example title="date filter">
        <p>{{date1 | date }}</p>
        <p>{{date2 | date 'yyyy-mm-dd ddd'}}</p>
        <template slot="extra">
          export default {
            data () {
              const date1 = new Date()
              const date2 = new Date('2016-12-1 14:49:51')
              return {
                date1,
                date2
              }
            }
          }
        </template>
      </example>
    </div>
  </div>
</template>

<script>
  import md from './date.md'

  export default {
    data () {
      const date1 = new Date()
      const date2 = new Date('2016-12-1 14:49:51')
      return {
        md: md,
        date1, date2
      }
    }
  }
</script>

<style lang="stylus">
</style>