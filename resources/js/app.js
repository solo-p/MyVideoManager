/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


import VueRouter from 'vue-router';
//import VueYoutube from 'vue-youtube';
//import Notifications from 'vue-notification';

import YoutubeDash from './Youtube/YoutubeDash.vue';
//import VideoDetail from './Youtube/VideoDetail.vue';
//import MyPlaylists from './Youtube/MyPlaylists.vue';




// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));



window.eventBus = new Vue({
    
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const routes = [
    {path: '/', component: YoutubeDash, 'name': 'youtube-dash'},
    {path: '/video', component: VideoDetail, 'name': 'youtube-video'}
];

const router = new VueRouter({
    routes
});


const app = new Vue({
    router
}).$mount('#app');
