# $alert

> 使用vue实例方法快速调用对话窗口

## usage

* $alert(`标题`, `内容`, `[确定事件]`, `[确定按钮文本]`) 无标题图标窗口
* $alert.info(`标题`, `内容`, `[确定事件]`, `[确定按钮文本]`) 提示窗口
* $alert.success(`标题`, `内容`, `[确定事件]`, `[确定按钮文本]`) 成功窗口
* $alert.warning(`标题`, `内容`, `[确定事件]`, `[确定按钮文本]`) 警告窗口
* $alert.error(`标题`, `内容`, `[确定事件]`, `[确定按钮文本]`) 注意窗口

> 若不指定确定事件，默认自动关闭窗口，否则需要自行调用`hide`函数，具体支持函数详见`Modal`组件

```javascript
  this.$alert('标题', '内容')
  this.$alert('标题', '内容', null, '知道了')
  this.$alert('标题', '内容', function ({hide, start}) {
    console.log('点击了确定，５秒后关闭')
    start()
    setTimeout(() => {
      hide()
    }, 5000)
  })
```