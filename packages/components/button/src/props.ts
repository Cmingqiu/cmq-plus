import { PropType, ExtractPropTypes } from 'vue';
/* 
  ExtractPropTypes:根据组件属性提取类型
*/

export const buttonProps = {
  size: [Number, String] as PropType<number | string>,
  type: String
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
