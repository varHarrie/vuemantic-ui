<template>
  <div class="page">
    <div class="markdown" v-html="md"></div>

    <div class="markdown" v-html="md_base"></div>

    <div class="markdown" v-html="md_flex"></div>
    <div class="style-demo-flex">
      <example title="flex">
        <div class="ui-row center">
          <div class="ui-cell">1 / 3</div>
          <div class="ui-cell-2">2 / 3</div>
          <div class="ui-cell">1 / 3</div>
        </div>
      </example>
    </div>

    <div>
      <h2>所有工具类查询</h2>
      <div class="ui fluid huge icon input">
        <input type="text" placeholder="请输入类名或样式" v-model="kwd" debounce="300" @keyup="loading=true">
        <i class="circular close link icon" v-if="kwd" @click="kwd=''"></i>
        <i class="search icon" v-else></i>
      </div>
      <div class="ui basic segment" :class="{loading:loading}">
        <table class="ui celled compact table">
          <thead>
            <tr><th>类名</th><th>样式</th></tr>
          </thead>
          <tbody>
            <tr v-for="c in filteredClasses" track-by="$index">
              <td>{{c.classname}}</td>
              <td v-html="c.styles"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable camelcase*/
  import md from './helpers.md'
  import md_base from './base.md'
  import md_flex from './flex.md'
  import _css from '../../../src/styles/index.styl'
  const css = _css[0][1]
  const regexp = /(.[^{]+){([^}]*)}/g
  const classes = []

  let rs
  while ((rs = regexp.exec(css)) !== null) {
    classes.push({
      classname: rs[1].trim(),
      styles: rs[2].trim().replace(/\n/g, '<br>').replace(/\s{2}/g, '').replace(/\s/g, '&nbsp;')
    })
  }

  export default {
    data: () => ({
      md, md_base, md_flex,
      classes: classes,
      loading: false,
      kwd: ''
    }),
    computed: {
      filteredClasses () {
        let classes = this.classes
        let kwd = this.kwd.trim()
        if (kwd) {
          classes = classes.filter((c) => c.classname.includes(kwd) || c.styles.includes(kwd))
        }
        this.loading = false
        return classes
      }
    }
  }
</script>

<style lang="stylus">
  .style-demo-flex
    .ui-row
      height: 100px
      .ui-cell
        height: 100px
        background: #ccc
      .ui-cell-2
        height: 100px
        background: #999
</style>