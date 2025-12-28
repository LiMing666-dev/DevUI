<template>
  <div class="D_List_Item" :class="{ D_List_Item_Active: active }">
    <div class="D_List_Item_Tag">
      <template v-if="slots.prependIcon">
        <slot name="prependIcon"></slot>
      </template>
      <d-icon
        color="#7a7a7a"
        size="20"
        v-else-if="prependIcon"
        :icon="prependIcon"
      ></d-icon>
      <div class="D_List_Item_Tag_Title">
        <slot v-if="slots.default"></slot>
        <template v-else> {{ title }} </template>
      </div>
    </div>

    <template v-if="slots.appendIcon">
      <slot name="appendIcon"></slot>
    </template>
    <d-icon color="#7a7a7a" size="20" v-else :icon="appendIcon"></d-icon>
  </div>
</template>

<script lang="ts" setup>
import { inject, onMounted, ref, toRefs, useSlots } from "vue";
import type { ListContext } from "../List/list.types";

const slots = useSlots();

const props = withDefaults(
  defineProps<{
    appendIcon?: string;
    size?: number | string;
    prependIcon?: string;
    title: string;
    value: string;
  }>(),
  {
    appendIcon: "",
    prependIcon: "",
    title: "",
  }
);

const active = ref<boolean>(false);

const { appendIcon, prependIcon, title, value } = toRefs(props);

const listKey: ListContext | undefined = inject("listKey");

console.log(listKey?.key);

const listItemFetch = () => {
  if (value.value == listKey?.key) {
    active.value = true;
  }
};

onMounted(() => {
  listItemFetch();
});

defineOptions({
  name: "DListItem",
});
</script>