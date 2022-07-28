<template>
  <i
    :class="[bem.b()]"
    :style="style"
  >
    <slot />
  </i>
</template>

<!-- <script lang="ts">
export default {
  name: 'CIcon'
};
</script> -->

<script lang="ts" setup>
import { createNameSpace } from '@cmq-plus/utils/createNamespace';
import { computed, CSSProperties } from 'vue';
import { iconProps } from './props';
defineOptions({
  name: 'CIcon'
});

const props = defineProps(iconProps);
const bem = createNameSpace('icon');
const style = computed<CSSProperties>(() => {
  return {
    ...(props.color ? { color: props.color } : {}),
    ...(props.size
      ? {
          'font-size': props.size + (typeof props.size === 'number' ? 'px' : '')
        }
      : {})
  };
});
</script>

