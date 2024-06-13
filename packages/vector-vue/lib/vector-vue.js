'use strict';
import Vue from 'vue';

import MyComponent from '../src/MyComponent.vue';
export default {
  install: function (Vue) {
    Vue.component('my-component', MyComponent);
  }
};
