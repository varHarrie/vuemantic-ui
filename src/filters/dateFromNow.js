import dateFormat from './date'

function toText (val, before, after) {
  return Math.abs(val) + (val > 0 ? before : after)
}

function fromNow (date, scope, format) {
  let ms = Date.now() - date.getTime()

  // 误差修正
  if (ms > 0) ms += 1000
  else ms -= 1000

  const minute = parseInt(ms / 1000 / 60)
  const hour = parseInt(minute / 60)
  const day = parseInt(hour / 24)
  const month = parseInt(day / 30)
  const year = parseInt(day / 365)

  if (year) {
    if (scope >= 6) return toText(year, '年前', '年后')
  } else if (month) {
    if (scope >= 5) return toText(month, '个月前', '个月后')
  } else if (day) {
    if (scope >= 4) return toText(day, '天前', '天后')
  } else if (hour) {
    if (scope >= 3) return toText(hour, '小时前', '小时后')
  } else if (minute) {
    if (scope >= 2) return toText(minute, '分钟前', '分钟后')
  } else if (scope >= 1) return ms > 0 ? '刚刚' : '不到一分钟之后'

  // if (year && scope >= 6) return toText(year, '年前', '年后')
  // if (month && scope >= 5) return toText(month, '个月前', '个月后')
  // if (day && scope >= 4) return toText(day, '天前', '天后')
  // if (hour && scope >= 3) return toText(hour, '小时前', '小时后')
  // if (minute && scope >= 2) return toText(minute, '分钟前', '分钟后')
  // if (scope >= 1) return ms > 0 ? '刚刚' : '不到一分钟之后'

  return dateFormat(date, format)
}

const scopeMap = {
  'moment': 1,
  'second': 1,
  'minute': 2,
  'hour': 3,
  'day': 4,
  'month': 5,
  'year': 6
}

export default function (date, scope = 'year', format) {
  if (typeof date === 'number' || typeof date === 'string' || date instanceof Date) date = new Date(date)
  else return ''

  if (typeof scope === 'string') scope = scopeMap[scope]

  return fromNow(date, scope, format)
}
