<template>
  <div class="page">
    <div class="markdown" v-html="md"></div>
    <div class="demos">
      <h2>demos</h2>
      <example title="message">
        <ui-message title="Changes in Service">
          We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.
        </ui-message>
        <ui-message content="Get the best news in your e-mail every day."></ui-message>
        <ui-message icon="notched circle loading">
          We're fetching that content for you.
        </ui-message>
      </example>
    </div>
  </div>
</template>

<script>
  import md from './message.md'

  export default {
    data: () => ({
      md: md
    })
  }
</script>

<style lang="stylus">
</style>