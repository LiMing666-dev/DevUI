<template>
  <div class="D_Icon">
    <span
      class="mdi"
      :class="[`mdi-${icon}`]"
      :style="{ fontSize: size + 'px' }"
      aria-hidden="true"
    >
    </span>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

const props = withDefaults(
  defineProps<{
    icon: string;
    size?: number | string;
    color?: string;
  }>(),
  {
    size: 16,
  }
);

const { icon, size } = toRefs(props);

defineOptions({
  name: "DIcon",
});
</script>