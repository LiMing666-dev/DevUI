<template>
  <div class="D_List_Item">
    <template v-if="slots.prependIcon">
      <slot></slot>
    </template>
    <d-icon v-else-if="prependIcon" :icon="prependIcon"></d-icon>
    <slot></slot>
    <template v-if="slots.appendIcon">
      <slot></slot>
    </template>
    <d-icon v-else :icon="appendIcon"></d-icon>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, useSlots } from "vue";

const slots = useSlots();

const props = withDefaults(
  defineProps<{
    appendIcon?: string;
    size?: number | string;
    prependIcon?: string;
  }>(),
  {
    appendIcon: "",
    prependIcon: "",
  }
);

const { appendIcon, prependIcon } = toRefs(props);

defineOptions({
  name: "DListItem",
});
</script>