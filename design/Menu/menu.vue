<template>
  <div class="D_Menu" ref="menuRef">
    <div class="D_Menu_Activator">
      <slot
        name="activator"
        :props="{
          onClick: MenuBlur,
          ref: setActivatorRef,
        }"
      ></slot>
    </div>
    <div
      ref="menuMainRef"
      class="Menu_Ref"
      style="position: absolute"
      :style="{ width: a2, height: a1, left: domWidth + 'px' }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const activatorRef = ref<HTMLElement | null>(null);
const menuMainRef = ref<HTMLElement | null>(null);
const menuRef = ref<HTMLElement | null>(null);
const domWidth = ref<number>(0);
const menu = ref<boolean>(false);
const a2 = ref("0px");
const a1 = ref("0px");
// 绑定Dom点击函数
const MenuBlur = () => {
  if (menu.value) {
    menuMainRef.value?.children[0]?.classList.remove("D_Menu_Main_Hover");
    menu.value = !menu.value;
  } else {
    menuMainRef.value?.children[0]?.classList.add("D_Menu_Main_Hover");
    menu.value = !menu.value;
  }
};

// 回调函数获取dom
const setActivatorRef = (el: any) => {
  activatorRef.value = el?.$el;
};

// bind绑定函数
const slotProps = {};

onMounted(() => {
  const activatorDom: HTMLElement | null = activatorRef.value;
  domWidth.value = activatorDom?.getBoundingClientRect().width || 0;
  console.log(domWidth.value);
  const mainWidth: any =
    menuMainRef.value?.children[0]?.getBoundingClientRect().width || 0;
  const mainHeight: any =
    menuMainRef.value?.children[0]?.getBoundingClientRect().height || 0;
  a2.value = mainWidth + "px";
  a1.value = mainHeight - 10 + "px";

  menuMainRef.value?.children[0]?.classList.add("D_Menu_Main");
});

defineOptions({
  name: "DMenu",
});
</script>