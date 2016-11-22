# ui-message

> 提示框

## props

* icon `String|''` 图标
* title `String|''` 标题
* content `String|Array|''` 内容
* floating `Boolean|false` 是否显示浮动投影
* compact `Boolean|false` 是否压缩内容空间
* attached `Boolean|false` 是否依附
* duration `Number|0` 持续时间，`0`为永久，需结合`on-timeout`事件使用

## events

 * on-timeout `fn()` 持续时间结束时触发



## slots

* `默认` 内容