# $modal

> 使用vue实例方法快速调用对话窗口

## usage

* $modal(`参数对象`)

> 可传入参数详见`Modal`组件，支持`icon`、`title`、`content`、`actions`、`basic`

```javascript
  this.$modal({
    title: '标题',
    content: '内容',
    actions: [{
      text: '按钮１',
      onClick: function ({hide}) {
        hide()
      }
    }]
  })

```