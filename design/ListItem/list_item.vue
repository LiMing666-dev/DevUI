<template>
  <div class="D_List_Item">
    <template v-if="slots.prependIcon">
      <slot name="prependIcon"></slot>
    </template>
    <d-icon v-else-if="prependIcon" :icon="prependIcon"></d-icon>
    <slot v-if="slots.default"></slot>
    <template v-else> {{ title }} </template>
    <template v-if="slots.appendIcon">
      <slot name="appendIcon"></slot>
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
    title: string;
  }>(),
  {
    appendIcon: "",
    prependIcon: "",
    title: "",
  }
);

const { appendIcon, prependIcon, title } = toRefs(props);

defineOptions({
  name: "DListItem",
});
</script>