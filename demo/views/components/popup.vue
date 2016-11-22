<template>
  <div class="page">
    <div class="markdown" v-html="md"></div>
    <div class="demos">
      <h2>demos</h2>
      <example title="hover + placement">
        <div class="demo-popups">
          <div>
            <ui-popup>
              <div class="ui button">左上</div>
              <template slot="content">内容</template>
            </ui-popup>
            <ui-popup placement="top center">
              <div class="ui button">中上</div>
              <template slot="content">内容</template>
            </ui-popup>
            <ui-popup placement="top right">
              <div class="ui button">右上</div>
              <template slot="content">内容</template>
            </ui-popup>
          </div>
          <div>
            <ui-popup placement="left center">
              <div class="ui button">左中</div>
              <template slot="content">内容</template>
            </ui-popup>
            <div class="ui button" disabled>占位</div>
            <ui-popup placement="right center">
              <div class="ui button">右中</div>
              <template slot="content">内容</template>
            </ui-popup>
          </div>
          <div>
            <ui-popup placement="bottom left">
              <div class="ui button">左下</div>
              <template slot="content">内容</template>
            </ui-popup>
            <ui-popup placement="bottom center">
              <div class="ui button">中下</div>
              <template slot="content">内容</template>
            </ui-popup>
            <ui-popup placement="bottom right">
              <div class="ui button">右下</div>
              <template slot="content">内容</template>
            </ui-popup>
          </div>
        </div>
      </example>
    </div>
  </div>
</template>

<script>
  import md from './popup.md'

  export default {
    data: () => ({
      md: md
    })
  }
</script>

<style lang="stylus">
  .demo-popups
    &>div
      margin: 10px
      .ui.button
        margin: 0
</style>