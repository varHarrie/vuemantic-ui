import dateformat from 'dateformat'

dateformat.i18n = {
  dayNames: [
    '周一', '周二', '周三', '周四', '周五', '周六', '周日',
    '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'
  ],
  monthNames: [
    '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',
    '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
  ]
}

export default function (date, format = 'yyyy-mm-dd HH:MM:ss') {
  if (typeof date === 'number' || typeof date === 'string' || date instanceof Date) date = new Date(date)
  else return ''

  return dateformat(date, format)
}

// Mask	Description

// d	Day of the month as digits; no leading zero for single-digit days.
// dd	Day of the month as digits; leading zero for single-digit days.
// ddd	Day of the week as a three-letter abbreviation.
// dddd	Day of the week as its full name.
// m	Month as digits; no leading zero for single-digit months.
// mm	Month as digits; leading zero for single-digit months.
// mmm	Month as a three-letter abbreviation.
// mmmm	Month as its full name.
// yy	Year as last two digits; leading zero for years less than 10.
// yyyy	Year represented by four digits.
// h	Hours; no leading zero for single-digit hours (12-hour clock).
// hh	Hours; leading zero for single-digit hours (12-hour clock).
// H	Hours; no leading zero for single-digit hours (24-hour clock).
// HH	Hours; leading zero for single-digit hours (24-hour clock).
// M	Minutes; no leading zero for single-digit minutes.
// MM	Minutes; leading zero for single-digit minutes.
// N	ISO 8601 numeric representation of the day of the week.
// o	GMT/UTC timezone offset, e.g. -0500 or +0230.
// s	Seconds; no leading zero for single-digit seconds.
// ss	Seconds; leading zero for single-digit seconds.
// S	The date's ordinal suffix (st, nd, rd, or th). Works well with d.
// l	Milliseconds; gives 3 digits.
// L	Milliseconds; gives 2 digits.
// t	Lowercase, single-character time marker string: a or p.
// tt	Lowercase, two-character time marker string: am or pm.
// T	Uppercase, single-character time marker string: A or P.
// TT	Uppercase, two-character time marker string: AM or PM.
// W	ISO 8601 week number of the year, e.g. 42
// Z	US timezone abbreviation, e.g. EST or MDT. With non-US timezones or in the
// '...', "..."	Literal character sequence. Surrounding quotes are removed.
// UTC:	Must be the first four characters of the mask. Converts the date from local time to UTC/GMT/Zulu time before applying the mask. The "UTC:" prefix is removed.

// Name	Mask	Example

// default	ddd mmm dd yyyy HH:MM:ss	Sat Jun 09 2007 17:46:21
// shortDate	m/d/yy	6/9/07
// mediumDate	mmm d, yyyy	Jun 9, 2007
// longDate	mmmm d, yyyy	June 9, 2007
// fullDate	dddd, mmmm d, yyyy	Saturday, June 9, 2007
// shortTime	h:MM TT	5:46 PM
// mediumTime	h:MM:ss TT	5:46:21 PM
// longTime	h:MM:ss TT Z	5:46:21 PM EST
// isoDate	yyyy-mm-dd	2007-06-09
// isoTime	HH:MM:ss	17:46:21
// isoDateTime	yyyy-mm-dd'T'HH:MM:ss	2007-06-09T17:46:21
// isoUtcDateTime	UTC:yyyy-mm-dd'T'HH:MM:ss'Z'	2007-06-09T22:46:21Z
