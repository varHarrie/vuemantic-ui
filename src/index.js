// components
import Modal from './components/Modal'
import Popup from './components/Popup'
import Message from './components/Message'
import Notification from './components/Notification'

// directives
import clickOutside from './directives/clickOutside'

// filters
import date from './filters/date.js'
import dateFromNow from './filters/dateFromNow.js'

/* eslint-disable comma-style */
const components =
{ Modal
, Popup
, Message
, Notification
}

const directives =
{ clickOutside
}

const filters =
{ date
, dateFromNow
}
/* eslint-enable comma-style */

function install (Vue) {
  for (let key in components) {
    Vue.component(components[key].name, components[key])
  }

  for (let key in directives) {
    Vue.directive(key, directives[key])
  }

  for (let key in filters) {
    Vue.filter(key, filters[key])
  }
}

module.exports = {components, directives, install}
