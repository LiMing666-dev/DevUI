<template>
  <div class="D_List" :class="{ D_list_Nav: nav }">
    <slot></slot>

  </div>
</template>

<script lang="ts" setup>
import { provide, reactive, toRefs } from "vue";
import type { ListContext } from "./list.types";
defineOptions({
  name: "DList",
});

const props = withDefaults(
  defineProps<{
    nav: boolean;
    opened: string | Object;
  }>(),
  {
    nav: false,
    opened: "",
  }
);

const { nav, opened } = toRefs(props);
console.log(nav.value);

const keyProvide = reactive<ListContext>({
  key: opened,
});
provide("listKey", keyProvide);
</script>