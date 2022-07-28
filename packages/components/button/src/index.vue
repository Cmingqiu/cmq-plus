<template>
  <div :class="[bem.b()]">
    button
  </div>
</template>

<script lang="ts" setup>
import { createNameSpace } from '@cmq-plus/utils/createNamespace';

defineOptions({
  name: 'CButton'
});

const bem = createNameSpace('button');
</script>

<style lang="scss" scoped></style>
