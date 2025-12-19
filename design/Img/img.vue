<template>
  <div
    class="D_Img"
    :style="{
      width: width,
      height: height,
    }"
  >
    <img style="width: 100%; height: 100%" :src="src" />
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";
defineOptions({
  name: "DImg",
});

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "40px",
  },
  height: {
    type: String,
    default: "40px",
  },
});

const { src, height, width } = toRefs(props);
</script>