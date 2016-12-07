<template>
  <div class="Example" :class="{visible:visible}">
    <div class="Example__actions">
      <span @click="toggle()"><i class="code fitted icon"></i> {{visible?'隐藏代码':'显示代码'}}</span>
    </div>
    <div class="Example__title" v-if="title">{{title}}</div>
    <div class="Example__container">
      <div class="Example__view"><slot></slot></div>
      <div class="Example__code">
        <pre class="code" :style="{height:height1}"><code v-highlight="code" v-el:code></code></pre>
        <pre class="extra" v-if="extra" :style="{height:height2}"><code v-highlight="extra" v-el:extra lang="javascript"><slot name="extra"></slot></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
  const startReg = /^<[^\/>]+>$/
  const endReg = /^<\/[^>]+>$/
  // inspired by: http://stackoverflow.com/questions/376373/pretty-printing-xml-with-javascript
  function formatXml (xml) {
    let formatted = ''
    let pad = 0
    xml = xml
    .trim()
    .replace(/(>)\s+([^\s]+)/g, '$1\r\n$2')
    .replace(/([^\s]+)\s+(<)/g, '$1\r\n$2')
    .replace(/(>)\s+(<)/g, '$1\r\n$2')
    .split('\r\n')
    .forEach((node, index) => {
      let indent = 0
      if (startReg.test(node)) indent += 1
      else if (endReg.test(node) && pad > 0) pad -= 1

      let padding = ''
      for (let i = 0; i < pad; i++) padding += '\t'

      pad += indent

      formatted += padding + node + '\r\n'
    })
    return formatted
  }

  function outdent (src) {
    let lines = htmlDecode(src).split(/\n/g).filter((line) => line.trim())
    if (!lines.length) return ''
    const match = lines[0].match(/^\s+/)
    let indent = match ? match[0] : ''
    return lines.map((line) => line.replace(indent, '')).join('\n')
  }

  function htmlDecode (str) {
    return str.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&nbsp;/g, ' ')
        .replace(/&#39;/g, '\'')
        .replace(/&quot;/g, '"')
        .replace(/<br(\/?)>/g, '\n')
  }

  export default {
    name: 'example',
    props: {
      visible: {type: Boolean, default: false},
      title: {type: String, default: ''}
    },
    data: () => ({
      code: ''
    }),
    computed: {
      height1 () { return this.visible ? this.$els.code.offsetHeight + 20 + 'px' : 0 },
      height2 () { return this.visible ? this.$els.extra.offsetHeight + 20 + 'px' : 0 },
      code () {
        if (!this._slotContents || !this._slotContents.default) return ''
        const children = this._slotContents.default.children
        const src = Array.prototype.reduce.call(children, (src, child) => {
          src += child.outerHTML + '\n'
          return src
        }, '').replace(/=""/g, '')
        return formatXml(src)
      },
      extra () {
        if (!this._slotContents || !this._slotContents.extra) return ''
        const src = outdent(this._slotContents.extra.textContent)
        return src
      }
    },
    methods: {
      toggle () { this.visible = !this.visible }
    }
  }
</script>

<style lang="stylus">
  @import '~highlight.js/styles/solarized-light.css'
  // @import '~highlight.js/styles/atom-one-light.css'
  .Example
    position: relative
    border: 1px solid #eee
    border-radius: 4px
    transition: box-shadow .3s
    &__actions
      position: absolute
      top: 10px
      right: 10px
      z-index: 10
      padding: 3px
      background: rgba(255,255,255,.8)
      border-radius: 4px
      font-size: 12px
      opacity: 0
      transform: scale(.8)
      transition: all .2s
      span
        cursor: pointer
        color: #4183C4
    &__title
      padding: 10px 10px 5px
      font-size: 1.1em
      color: #999
    &__container
      display: flex
    &__view
      flex: 1
      padding: 10px
    &__code
      flex: 1
      padding: 0
      box-sizing: content-box
      overflow-x: auto
      color: #5e5e5e
      background: #fafafa
      opacity: 0
      transition: all .2s
      pre
        margin: 0
        overflow: visible
      .code, .extra
        transition: all .2s
        &:before
          display: block
          font-size: 12px
          color: #ccc
      .code:before
        content: '<template>'
      .extra:before
        content: '<script>'
      .extra
        margin-top: 10px
        border-top: 1px dashed #ddd
    &.visible &
      &__code
        flex: 1
        opacity: 1
        padding: 10px
    &:hover
      box-shadow: 0 0 8px rgba(0,0,0,.08)
    &:hover &
      &__actions
        opacity: 1
        transform: scale(1)
    @media only screen and (max-width: 1200px)
      &__container
        flex-direction: column
    @media only screen and (min-width: 1200px)
      &__container
        flex-direction: row
      &__code
        flex: 0
        opacity: 1
</style>
