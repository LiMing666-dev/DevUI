<template>
  <div class="D_Header" :style="{ background: color }">
    <slot></slot>
  </div>
  <div style="height: 64px;"></div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';


const props = withDefaults(defineProps<{
  color: string
}>(), {
  color: undefined
})

const { color } = toRefs(props)

defineOptions({
  name: "DHeader",
});
</script>