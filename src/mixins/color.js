export default {
  props: {
    color: {
      type: String,
      default: '',
      validator (val) {
        return [
          'red',
          'orange',
          'yellow',
          'olive',
          'green',
          'teal',
          'blue',
          'violet',
          'purple',
          'pink',
          'brown',
          'black',
          'positive',
          'negative',
          'info',
          'warning'
        ].indexOf(val) >= 0
      }
    }
  }
}
