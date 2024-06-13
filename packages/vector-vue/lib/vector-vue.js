'use strict';
import Vue from 'vue';

import MyComponent from './MyComponent.vue';
export default {
  install: function (Vue) {
    Vue.component('my-component', MyComponent);
  }
};
