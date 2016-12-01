# dateFromNow

> 日期语义化filter

## usage

* [Date|string|number] | `dateFromNow` [语义化范围] [格式化字符串]

> 输入日期可以为`Date`，`string`，`number`，其他类型（包括`undefined`）则返回空字符串

> 语义化范围可以为`year`，`month`，`day`，`hour`，`minute`，`moment`，不填则默认为`year`

> 格式化字符串若不指定，默认为`yyyy-mm-dd HH:MM:ss`
