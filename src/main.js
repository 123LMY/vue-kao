// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.axios = (axios)
import { Button, Row, Col, Search, Swipe, SwipeItem, Lazyload, Field, NavBar, Tab, Tabs } from 'vant'
Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use(Field).use(NavBar).use(Tab)
  .use(Tabs).use(Lazyload)
Vue.config.productionTip = false
import { List } from 'vant'
Vue.use(List)
import { PullRefresh } from 'vant'
Vue.use(PullRefresh)
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)
import { Stepper } from 'vant';
Vue.use(Stepper);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
