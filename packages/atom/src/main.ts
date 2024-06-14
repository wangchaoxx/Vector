import { DefineComponent, PropType, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from 'vue';
import MyButton from './components/Button/index.vue';

export { MyButton }
// 导出插件安装函数
export default {
  install(Vue: { component: (arg0: string, arg1: DefineComponent<{ label: { type: PropType<string>; required: true; }; primary: { type: PropType<boolean>; default: boolean; }; size: { type: PropType<"small" | "medium" | "large">; }; type: { type: PropType<"primary">; }; backgroundColor: { type: PropType<string>; }; }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, { click: (id: number) => void; }, string, PublicProps, Readonly<ExtractPropTypes<{ label: { type: PropType<string>; required: true; }; primary: { type: PropType<boolean>; default: boolean; }; size: { type: PropType<"small" | "medium" | "large">; }; type: { type: PropType<"primary">; }; backgroundColor: { type: PropType<string>; }; }>> & { onClick?: ((id: number) => any) | undefined; }, { primary: boolean; }, {}>) => void; }) {
    Vue.component('MyButton', MyButton);
  }
};
