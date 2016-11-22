<template>
  <div class="Message ui message" :class="classnames">
    <i class="close icon" v-if="closable" @click="close()"></i>
    <i class="icon" v-if="icon" :class="[icon]"></i>
    <div class="content">
      <div class="header" v-if="title">{{title}}</div>
      <slot><ul class="list" v-if="isMultiLine">
        <li v-for="c in content">{{c}}</li> 
      </ul><template v-else>
        {{content}}
      </template></slot>
    </div>
  </div>
</template>

<script>
  import size from '../../mixins/size'
  import color from '../../mixins/color'

  export default {
    name: 'ui-message',
    mixins: [size, color],
    props: {
      icon: {type: String, default: ''},
      title: {type: String, default: ''},
      content: {type: String, default: ''},
      floating: {type: Boolean, default: false},
      compact: {type: Boolean, default: false},
      attached: {type: Boolean, default: false},
      duration: {type: Number, default: 0},
      closable: {type: Boolean, default: false}
    },
    computed: {
      isMultiLine () { return this.content instanceof Array },
      classnames () {
        const {icon, floating, compact, size, color} = this
        return [{icon, floating, compact}, size, color]
      }
    },
    data: () => ({
      timer: null
    }),
    ready () {
      if (this.duration) {
        this.timer = setTimeout(() => {
          this.$emit('on-timeout')
          clearTimeout(this.timer)
        }, this.duration)
      }
    },
    methods: {
      close () {
        this.$emit('on-close')
      }
    }
  }
</script>