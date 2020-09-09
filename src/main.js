import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(Vant);

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')