import hljs from 'highlight.js'

function highlight (src, lang = 'html') {
  if (src && typeof src === 'string') {
    const colored = hljs.highlight(lang, src, true).value
    return colored.replace(/\t/g, '&nbsp;&nbsp;').replace(/\r\n/g, '<br/>')
  } else return ''
}

export default {
  params: ['lang'],
  bind () {
    if (!this.expression) {
      this.el.innerHTML = highlight(this.el.innerHTML, this.params.lang)
    }
  },
  update (src) {
    if (this.expression) this.el.innerHTML = highlight(src, this.params.lang)
  }
}
