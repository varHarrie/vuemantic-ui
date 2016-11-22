export default {
  bind () {
    this.onClick = (event) => {
      if (this.el.contains(event.target)) return false
      if (this.expression) this.vm[this.expression]()
    }
    setTimeout(() => {
      document.addEventListener('click', this.onClick)
    })
  },
  unbind () {
    document.removeEventListener('click', this.onClick)
  }
}
