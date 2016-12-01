<template>
  <div class="page global-page">
    <div class="ui left fixed large vertical inverted pointing menu">
      <div class="header item">
        <div class="header">
          <span href="#" v-link="{path:'/'}"><i class="desktop icon"></i> Vuemantic UI</span>
          <p style="margin-top:10px"><iframe src="https://ghbtns.com/github-btn.html?user=varHarrie&repo=vuemantic-ui&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></p>
        </div>
      </div>
      <div class="item">
        <div class="ui mini teal left pointing label">{{components.length}}</div>
        <div class="header">
          组件（components）
        </div>
        <div class="menu">
          <a class="item" v-for="component in components" v-link="{name:component.name}">
            {{component.text}}（{{component.name}}）
          </a>
        </div>
      </div>
      <div class="item">
        <div class="ui mini teal left pointing label">{{directives.length}}</div>
        <div class="header">
          指令（directives）
        </div>
        <div class="menu">
          <a class="item" v-for="directive in directives" v-link="{name:directive.name}">
            {{directive.text}}（{{directive.name}}）
          </a>
        </div>
      </div>
      <div class="item">
        <div class="ui mini teal left pointing label">{{methods.length}}</div>
        <div class="header">
          实例方法（methods）
        </div>
        <div class="menu">
          <a class="item" v-for="method in methods" v-link="{name:method.name}">
            {{method.text}}
          </a>
        </div>
      </div>
      <div class="item">
        <div class="ui mini teal left pointing label">{{filters.length}}</div>
        <div class="header">
          过滤器（filters）
        </div>
        <div class="menu">
          <a class="item" v-for="filter in filters" v-link="{name:filter.name}">
            {{filter.text}}
          </a>
        </div>
      </div>
    </div>
    <div class="global-container">
      <router-view></router-view>
    </div>
    <a href="https://github.com/varHarrie/vuemantic-ui"><img style="position:absolute;top:0;right:0;border:0;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>
  </div>
</template>

<script>
  export default {
    data: () => ({
      components: [
        {name: 'modal', text: '模态窗口'},
        {name: 'popup', text: '弹出框'},
        {name: 'message', text: '信息提示框'},
        {name: 'notification', text: '通知提示框'}
      ],
      directives: [
        {name: 'clickOutside', text: '点击外部'}
      ],
      methods: [
        {name: '_modal', text: '$modal'},
        {name: '_alert', text: '$alert'},
        {name: '_confirm', text: '$confirm'},
        {name: '_msg', text: '$msg'},
        {name: '_notice', text: '$notice'}
      ],
      filters: [
        {name: 'f_date', text: '日期格式化（date）'},
        {name: 'f_dateFromNow', text: '日期语义化（dateFromNow）'}
      ]
    })
  }
</script>

<style lang="stylus">
  @import '../styles/markdown.styl'
  html, body, #app
    height: 100%
  .global-page
    padding-left: 18rem
    height: 100%
    .global-container
      padding: 2rem
      height: 100%
      overflow-y: scroll
</style>