import { withInstall } from '@cmq-plus/utils/with-install'
import CButton from './src/index.vue'

const Button = withInstall(CButton)

export * from './src/props';
// 方便用户可以通过ref使用组件类型，增加实例类型
export type ButtonInstanceType = InstanceType<typeof Button>;
export default Button


// 方便使用组件的时候提示属性，需配合volar插件
declare module 'vue' {
  export interface GlobalComponents {
    CButton: typeof Button;
  }
}
