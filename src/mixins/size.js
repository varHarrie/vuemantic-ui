export default {
  props: {
    size: {
      type: String,
      default: '',
      validator (val) {
        return [
          'mini',
          'tiny',
          'small',
          'large',
          'big',
          'huge',
          'massive'
        ].indexOf(val) >= 0
      }
    }
  }
}
