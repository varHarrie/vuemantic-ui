# $msg

> 使用vue实例方法快速调用提示框

## usage

* $msg(`参数对象`)
* $msg.info(`内容`, `[图标]`, `[持续时间]`) 提示
* $msg.success(`内容`, `[图标]`, `[持续时间]`) 成功
* $msg.warning(`内容`, `[图标]`, `[持续时间]`) 警告
* $msg.error(`内容`, `[图标]`, `[持续时间]`) 错误

> `参数对象`支持`color`、`icon`、`content`、`size`、`duration`属性

```javascript
  this.$modal({
    color: 'yellow',
    content: '内容'
  })

  this.$msg.info(`内容`)
```