# ui-notification

> 通知窗口

## props

* visible `Boolean|true` 是否显示
* icon `String|''` 图标
* title `String|''` 标题
* content `String|''` 内容
* duration `Number|0` 持续事件
* actions `Array|[]` 动作按钮，支持`text`，`icon`，`onClick`
* width `String|'330px'` 宽度
* progress `Boolean|true` 是否显示进度条


## events

* on-show `fn()` 显示时触发
* on-hide `fn()` 隐藏时触发
* on-hidden `fn()` 隐藏动画完全结束时触发
* on-action `fn({hide}, action)` 单击动作按钮时触发（注意：本身的`onClick`事件也会触发）