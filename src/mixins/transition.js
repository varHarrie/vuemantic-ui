export default {
  props: {
    transition: {
      type: String,
      default: '',
      validator (val) {
        return [
          'scale',
          'fade',
          'flip',
          'drop',
          'fly',
          'swing',
          'browse',
          'slide'
        ].indexOf(val) >= 0
      }
    }
  }
}
