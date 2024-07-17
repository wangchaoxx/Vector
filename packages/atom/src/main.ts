import './design/index.less'
import MyButton from './components/Button/index.vue';
import MyTable from './components/Table/index.vue';
export { MyButton, MyTable }
// 导出插件安装函数
export default {
  install(Vue: { component: (arg0: string, arg1: any) => void; }) {
    Vue.component('MyButton', MyButton as any);
    Vue.component('MyTable', MyTable as any);
  }
};
