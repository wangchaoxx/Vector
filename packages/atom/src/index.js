import MyButton from './MyButton/MyButton.vue';

// 导出单个组件
export { MyButton };

// 导出插件安装函数
export default {
  install(Vue) {
    Vue.component('MyButton', MyButton);
  }
};
