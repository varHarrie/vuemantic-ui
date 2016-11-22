# ui-popup

> 气泡提示框

## props

* visible `Boolean|false` 是否显示
* disabled `Boolean|false` 是否禁用
* title `String|''` 标题
* content `String|''` 内容
* placement `String|'top left'` 位置，可选值：
  * `top left` 左上
  * `top center` 中上
  * `top right` 右上
  * `left center` 左中
  * `right center` 右中
  * `bottom left` 左下
  * `bottom center` 中下
  * `bottom right` 右下
* trigger `String|'hover'` 激活方式，可选值`hover`，`click`
* actions `Array|[]` 动作按钮，支持`text`，`classname`，`icon`，`onClick`
* loading `Boolean|false` 是否加载中
* noPadding `Boolean|false` 移除padding样式
* basic `Boolean|false` 使用基础样式（没有三角尾巴）



## events

* on-action `fn({show, hide, start, end}, action)` 单击动作按钮时触发（注意：本身的`onClick`事件也会触发）
  * `show()` 显示窗口
  * `hide()` 关闭窗口
  * `start()` 进入加载中状态
  * `end()` 退出加载中状态
  * `enable()` 启用（disabled=false）
  * `disable()` 启用（disabled=true）



## slots

* `默认` 主要内容
* `content` 显示内容