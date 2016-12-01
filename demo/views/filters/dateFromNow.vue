<template>
  <div class="page">
    <div class="markdown" v-html="md"></div>
    <div class="demos">
      <h2>demos</h2>
      <example title="dateFromNow filter">
        <p>{{date1 | dateFromNow }}</p>
        <p>{{date2 | dateFromNow }}</p>
        <p>{{date3 | dateFromNow }}</p>
        <p>{{date4 | dateFromNow }}</p>
        <p>{{date5 | dateFromNow }}</p>
        <p>{{date6 | dateFromNow }}</p>
        <p>-------------------------------</p>
        <p>{{date1 | dateFromNow 'day' 'yyyy-mm-dd' }}</p>
        <p>{{date2 | dateFromNow 'day' 'yyyy-mm-dd' }}</p>
        <p>{{date3 | dateFromNow 'day' 'yyyy-mm-dd' }}</p>
        <p>{{date4 | dateFromNow 'day' 'yyyy-mm-dd' }}</p>
        <p>{{date5 | dateFromNow 'day' 'yyyy-mm-dd' }}</p>
        <p>{{date6 | dateFromNow 'day' 'yyyy-mm-dd' }}</p>
        <template slot="extra">
          export default {
            data () {
              const date1 = new Date()

              const date2 = new Date()
              date2.setMinutes(date2.getMinutes() - 5)

              const date3 = new Date()
              date3.setHours(date3.getHours() + 2)

              const date4 = new Date()
              date4.setDate(date4.getDate() - 10)

              const date5 = new Date()
              date5.setMonth(date5.getMonth() - 3)

              const date6 = new Date()
              date6.setFullYear(date6.getFullYear() - 1)
              return {
                date1,
                date2,
                date3,
                date4,
                date5,
                date6
              }
            }
          }
        </template>
      </example>
    </div>
  </div>
</template>

<script>
  import md from './dateFromNow.md'

  export default {
    data () {
      const date1 = new Date()

      const date2 = new Date()
      date2.setMinutes(date2.getMinutes() - 5)

      const date3 = new Date()
      date3.setHours(date3.getHours() + 2)

      const date4 = new Date()
      date4.setDate(date4.getDate() - 10)

      const date5 = new Date()
      date5.setMonth(date5.getMonth() - 3)

      const date6 = new Date()
      date6.setFullYear(date6.getFullYear() - 1)

      return {
        md: md,
        date1, date2, date3, date4, date5, date6
      }
    }
  }
</script>

<style lang="stylus">
</style>