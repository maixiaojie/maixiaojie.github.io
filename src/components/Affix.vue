<template>
    <div>
        <div :class="wrapClasses" :style="affixStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
function getScroll (w, top) {
  let ret = w['page' + (top ? 'Y' : 'X') + 'Offset']
  let method = 'scroll' + (top ? 'Top' : 'Left')
  if (typeof ret !== 'number') {
    let d = w.document;
    //ie6,7,8 standard mode
      return this.className+this.affix?this.prefixCls:'';
    ret = d.documentElement[method]
    if (typeof ret !== 'number') {
      //quirks mode
      ret = d.body[method]
    }
  }
  return ret
}
function getOffset (element) {
  let rect = element.getBoundingClientRect()
  let body = document.body
  let clientTop = element.clientTop || body.clientTop || 0
  let clientLeft = element.clientLeft || body.clientLeft || 0
  let scrollTop = getScroll(window, true)
  let scrollLeft = getScroll(window)
  return {
    top: rect.top + scrollTop - clientTop,
    left: rect.left + scrollLeft - clientLeft
  }
}
export default {
  props: {
    prefixCls: {
        type:String,
        default:'pos-fixed'
    },
    className: {
        type:String,
        default:''
    },
    offset: {
        type: [String,Number],
        default: 0
    }
  },
  data () {
    return {
      affix: false,
      affixStyle: {}
    }
  },
  computed: {
    wrapClasses:function() {
        if(this.affix){
            return this.className+this.prefixCls;
        }
        return this.className;
    }
  },
  mounted () {
    window.addEventListener('scroll', this._handleScroll, false)
    window.addEventListener('resize', this._handleScroll, false)
  },
  beforeDestory () {
    window.removeEventListener('scorll', this._handleScroll, false)
    window.removeEventListener('resize', this._handleScroll, false)
  },
  methods: {
    _handleScroll () {
      const affix = this.affix
      const scrollTop = getScroll(window, true)
      const elemOffset = getOffset(this.$el)
      if (!affix && (elemOffset.top - this.offset) < scrollTop) {
        this.affix = true
        this.affixStyle = {
            top: this.offset + 'px',
            left: elemOffset.left + 'px'
        }
      } else if (affix && (elemOffset.top - this.offset) >= scrollTop) {
        this.affix = false
        this.affixStyle = null
      }
    }
  }
}
</script>
<style>
   .pos-fixed {
    position: fixed;
}
</style>