<template>
  <div class="page global-page">
    <div class="ui left fixed large vertical inverted pointing menu">
      <div class="header item">
        <div class="header">
          <span href="#" v-link="{path:'/'}"><i class="desktop icon"></i> Vuemantic UI</span>
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
    </div>
    <div class="global-container">
      <router-view></router-view>
    </div>
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