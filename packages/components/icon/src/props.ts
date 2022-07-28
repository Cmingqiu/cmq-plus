import { PropType, ExtractPropTypes } from 'vue';
/* 
  ExtractPropTypes:根据组件属性提取类型
*/

export const iconProps = {
  size: [Number, String] as PropType<number | string>,
  color: String
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
