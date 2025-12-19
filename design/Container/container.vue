<template>
  <div
    class="D_Container"
    :style="{
      padding: `0px ${interval}px`,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

const props = defineProps({
  interval: {
    type: String,
    default: "0",
  },
});

const { interval } = toRefs(props);

defineOptions({
  name: "DContainer",
});
</script>