import { withInstall } from '@cmq-plus/utils/with-install';
import CIcon from './src/index.vue';

const Icon = withInstall(CIcon);

export * from './src/props';
// 方便用户可以通过ref使用组件类型，增加实例类型
export type IconInstanceType = InstanceType<typeof Icon>;
export default Icon;

// 方便使用组件的时候提示属性，需配合volar插件
declare module 'vue' {
  export interface GlobalComponents {
    CIcon: typeof Icon;
  }
}
