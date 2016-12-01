module.exports = {
  '/': {
    name: 'home',
    component: require('./views/home.vue'),
    subRoutes: {
      '/components': {
        component: {template: '<router-view></router-view>'},
        subRoutes: {
          '/modal': {name: 'modal', component: require('./views/components/modal.vue')},
          '/popup': {name: 'popup', component: require('./views/components/popup.vue')},
          '/message': {name: 'message', component: require('./views/components/message.vue')},
          '/notification': {name: 'notification', component: require('./views/components/notification.vue')}
        }
      },
      '/directives': {
        component: {template: '<router-view></router-view>'},
        subRoutes: {
          '/clickOutside': {name: 'clickOutside', component: require('./views/directives/clickOutside.vue')}
        }
      },
      '/methods': {
        component: {template: '<router-view></router-view>'},
        subRoutes: {
          '/modal': {name: '_modal', component: require('./views/methods/modal.vue')},
          '/alert': {name: '_alert', component: require('./views/methods/alert.vue')},
          '/confirm': {name: '_confirm', component: require('./views/methods/confirm.vue')},
          '/msg': {name: '_msg', component: require('./views/methods/msg.vue')},
          '/notice': {name: '_notice', component: require('./views/methods/notice.vue')}
        }
      },
      '/filters': {
        component: {template: '<router-view></router-view>'},
        subRoutes: {
          '/date': {name: 'f_date', component: require('./views/filters/date.vue')},
          '/dateFromNow': {name: 'f_dateFromNow', component: require('./views/filters/dateFromNow.vue')}
        }
      }
    }
  }
}
