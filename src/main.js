import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './common/index.less'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

createApp(App).use(store).use(router).use(ElementPlus).use(VueVideoPlayer).mount('#app')

