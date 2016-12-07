<template>
  <div class="page">
    <div class="markdown" v-html="md"></div>

    <div class="markdown" v-html="md_base"></div>

    <div class="markdown" v-html="md_color"></div>
    <example title="color">
      <div class="style-demo-color">
        <section>
          <span class="ui-red">red</span>
          <span class="ui-orange">orange</span>
          <span class="ui-yellow">yellow</span>
          <span class="ui-olive">olive</span>
          <span class="ui-green">green</span>
          <span class="ui-teal">teal</span>
          <span class="ui-blue">blue</span>
          <span class="ui-violet">violet</span>
          <span class="ui-purple">purple</span>
          <span class="ui-pink">pink</span>
          <span class="ui-brown">brown</span>
          <span class="ui-grey">grey</span>
          <span class="ui-black">black</span>
          <span class="ui-white"></span>white
          <span class="ui-000">#000</span>
          <span class="ui-333">#333</span>
          <span class="ui-666">#666</span>
          <span class="ui-999">#999</span>
          <span class="ui-aaa">#aaa</span>
          <span class="ui-ccc">#ccc</span>
          <span class="ui-eee">#eee</span>
        </section>
        <section>
          <div class="ui-bg-red"></div>
          <div class="ui-bg-orange"></div>
          <div class="ui-bg-yellow"></div>
          <div class="ui-bg-olive"></div>
          <div class="ui-bg-green"></div>
          <div class="ui-bg-teal"></div>
          <div class="ui-bg-blue"></div>
          <div class="ui-bg-violet"></div>
          <div class="ui-bg-purple"></div>
          <div class="ui-bg-pink"></div>
          <div class="ui-bg-brown"></div>
          <div class="ui-bg-grey"></div>
          <div class="ui-bg-black"></div>
          <div class="ui-bg-white"></div>
          <div class="ui-bg-000"></div>
          <div class="ui-bg-333"></div>
          <div class="ui-bg-666"></div>
          <div class="ui-bg-999"></div>
          <div class="ui-bg-aaa"></div>
          <div class="ui-bg-ccc"></div>
          <div class="ui-bg-eee"></div>
        </section>
        <section>
          <div class="ui-bd ui-bd-red"></div>
          <div class="ui-bd ui-bd-orange"></div>
          <div class="ui-bd ui-bd-yellow"></div>
          <div class="ui-bd ui-bd-olive"></div>
          <div class="ui-bd ui-bd-green"></div>
          <div class="ui-bd ui-bd-teal"></div>
          <div class="ui-bd ui-bd-blue"></div>
          <div class="ui-bd ui-bd-violet"></div>
          <div class="ui-bd ui-bd-purple"></div>
          <div class="ui-bd ui-bd-pink"></div>
          <div class="ui-bd ui-bd-brown"></div>
          <div class="ui-bd ui-bd-grey"></div>
          <div class="ui-bd ui-bd-black"></div>
          <div class="ui-bd ui-bd-white"></div>
          <div class="ui-bd ui-bd-000"></div>
          <div class="ui-bd ui-bd-333"></div>
          <div class="ui-bd ui-bd-666"></div>
          <div class="ui-bd ui-bd-999"></div>
          <div class="ui-bd ui-bd-aaa"></div>
          <div class="ui-bd ui-bd-ccc"></div>
          <div class="ui-bd ui-bd-eee"></div>
        </section>
      </div>
    </example>

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

    <div class="markdown" v-html="md_font_size"></div>
    <div>
      <example title="font-size">
        <span class="ui-f12">12px</span>
        <span class="ui-f16">16px</span>
        <span class="ui-f20">20px</span>
        <span class="ui-f24">24px</span>
      </example>
    </div>
    
    <div class="markdown" v-html="md_line_height"></div>
    <div>
      <example title="line-height">
        <span class="ui-lh80">80px</span>
      </example>
    </div>

    <div class="markdown" v-html="md_size"></div>
    <div>
      <example title="size">
        <div class="ui-bg-aaa ui-w50 ui-h30">50*30</div>
        <div class="ui-bg-ccc ui-bdr ui-s48">48*48</div>
      </example>
    </div>

    <div class="markdown" v-html="md_space"></div>

    <div>
      <h2>所有工具类查询（共{{classes.length}}个）</h2>
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
  import md_color from './color.md'
  import md_flex from './flex.md'
  import md_font_size from './font-size.md'
  import md_line_height from './line-height.md'
  import md_size from './size.md'
  import md_space from './space.md'
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
      md, md_base, md_color, md_flex, md_font_size, md_line_height, md_size, md_space,
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
  .style-demo-color
    div
      display: inline-block
      width: 20px
      height: 20px
      margin: 6px
      border-radius: 4px
      box-shadow: 0 0 3px rgba(0,0,0,.2)
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