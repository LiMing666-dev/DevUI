<template>
  <div class="D_Card" :style="{ background: color }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';

defineOptions({
  name: "DCard",
});

const props = withDefaults(defineProps<{
  color: string
}>(), {
  color: "white"
})

const { color } = toRefs(props)


</script>