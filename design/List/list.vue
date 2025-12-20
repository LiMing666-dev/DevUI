<template>
  <div class="D_List" :class="{ D_list_Nav: nav }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

defineOptions({
  name: "DList",
});

const props = withDefaults(
  defineProps<{
    nav: boolean;
  }>(),
  {
    nav: false,
  }
);

const { nav } = toRefs(props);
console.log(nav.value);
</script>