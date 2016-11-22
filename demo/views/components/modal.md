# ui-modal

> 模态窗口

## props

* visible `Boolean|false` 是否显示
* size `String|''` 尺寸，支持`mini`，`tiny`，`small`，`large`，`big`，`huge`，`massive`
* icon `String|''` 标题图标
* title `String|''` 标题
* content `String|Array|''` 内容
* actions `Array|[]` 动作按钮，支持`text`，`classname`，`icon`，`onClick`
* basic `Boolean|false` [窗口样式](http://semantic-ui.com/modules/modal.html#basic)
* maskClose `Boolean|false` 点击遮罩层关闭
* loading `Boolean|false` 是否为加载中状态
* detachable `Boolean|true` 是否统一讲窗口节点移至遮罩节点下



## events

* on-close `fn()` 窗口关闭时触发
* on-action `fn({show, hide, start, end}, action)` 单击动作按钮时触发（注意：本身的`onClick`事件也会触发）
  * `show()` 显示窗口
  * `hide()` 关闭窗口
  * `start()` 进入加载中状态
  * `end()` 退出加载中状态
* on-hidden `fn()` 完全隐藏时触发



## slots

* `默认` 窗口内容
* `title` 窗口标题
* `actions` 动作栏