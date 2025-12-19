<template>
  <div class="D_Chip">
    <template v-if="slots.prependIcon">
      <slot></slot>
    </template>
    <d-icon v-else-if="prependIcon" :icon="prependIcon"></d-icon>
    <slot />
    <template v-if="slots.appendIcon">
      <slot></slot>
    </template>
    <d-icon v-else-if="appendIcon" :icon="appendIcon"></d-icon>
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from "vue";

defineOptions({
  name: "DChip",
});

const slots = useSlots();

const props = withDefaults(
  defineProps<{
    prependIcon: string;
    appendIcon: string;
  }>(),
  {
    prependIcon: "",
    appendIcon: "",
  }
);
</script>