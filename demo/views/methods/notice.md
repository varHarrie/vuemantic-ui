# $notice

> 使用vue实例方法快速调用通知框

## usage

* $notice(`参数对象`)
* $notice.info(`[标题]`, `[内容]`, `[动作]`, `[持续时间]`, `[是否显示进度条]`) 提示
* $notice.success(`[标题]`, `[内容]`, `[动作]`, `[持续时间]`, `[是否显示进度条]`) 成功
* $notice.warning(`[标题]`, `[内容]`, `[动作]`, `[持续时间]`, `[是否显示进度条]`) 警告
* $notice.error(`[标题]`, `[内容]`, `[动作]`, `[持续时间]`, `[是否显示进度条]`) 错误

> `参数对象`支持`icon`、`title`、`content`、`actions`、`duration`、`progress`属性

```javascript
  this.$notice({
    title: '标题',
    content: '内容'
  })

  this.$notice.info('标题', '内容')
  this.$notice.success('标题', '内容')
  this.$notice.warning('标题', '内容')
  this.$notice.error('标题', '内容')
```