<template>
  <CIcon
    size="40px"
    color="red"
  >
    <Icon icon="mdi-light:home" />
  </CIcon>
  <CIcon
    :size="50"
    class="is-loading"
  >
    <Icon icon="fxemoji:2hearts" />
  </CIcon>

  <CButton></CButton>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<style></style>
