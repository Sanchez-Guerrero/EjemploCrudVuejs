import Vue from 'vue';
import Axios from 'axios';
import VueAxios from 'vue-axios';
const url = 'http://localhost:3000';
Axios.defaults.baseURL = url;
Vue.use(VueAxios, Axios);