<template>
  <div class="D_List_Group" :class="{ D_List_Group_Active: active }">
    <div class="D_List_Group_Title">
      <slot name="activator" :props="props"></slot>
    </div>
    <div class="D_List_Group_Main" style="margin-left: 20px" ref="mainRef">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";

const mainRef = ref();

const active = ref<boolean>(false);

const propsClick = () => {
  active.value = !active.value;
  stateFetch();
};

const stateFetch = () => {
  const _listHeight = mainRef.value.children[0].getBoundingClientRect().height;
  if (active.value) {
    mainRef.value.style.height = _listHeight + "px";
    props.appendIcon = "chevron-up";
  } else {
    mainRef.value.style.height = "0px";
    props.appendIcon = "chevron-down";
  }
};

const props = reactive({
  appendIcon: "chevron-down",
  onClick: propsClick,
  color: "#ccc",
});

onMounted(() => {
  stateFetch();
});

defineOptions({
  name: "DListGroup",
});
</script>