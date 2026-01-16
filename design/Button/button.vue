<template>
  <div ref="BtnRef" class="Button" :class="[
    `Button-${type}`,
    `Button-color-${ColorSelected}`,
    `Button-size-${buttonSize(size)}`,
    `d-borderRadius-${ShapeList[shape || 'default']}`,
  ]">
    <template v-if="slots.prependIcon">
      <slot></slot>
    </template>
    <d-icon v-else-if="prependIcon" :icon="prependIcon"></d-icon>
    <slot />
    <d-icon :icon="icon"></d-icon>
    <template v-if="slots.appendIcon">
      <slot name="appendIcon"></slot>
    </template>
    <d-icon v-else-if="appendIcon" :icon="appendIcon"></d-icon>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, toRefs, useSlots } from "vue";
import { isContrastWithWhiteSimpl } from "../../composables/color";
import { buttonAttribute } from "./index";
defineOptions({
  name: "DButton",
});

// Btn Ref
const BtnRef = ref<HTMLElement | null>(null);

// Color Type 通用颜色类型
const ColorTypes: string[] = ["primaty", "success", "error"];

const slots = useSlots();

const props = withDefaults(
  defineProps<{
    type: "primary" | "outline" | "subtle" | "transparent";
    color: string;
    size: "small" | "medium" | "large";
    shape: "none" | "sm" | "lg" | "xl";
    prependIcon: string;
    appendIcon: string;
    icon: string
  }>(),
  {
    type: undefined,
    color: undefined,
    shape: undefined,
    size: undefined,
    prependIcon: undefined,
    appendIcon: undefined,
    icon: undefined
  }
);

// shape 数组类型映射
const ShapeList = {
  none: "None",
  sm: "Small",
  default: "Medium",
  lg: "Large",
  xl: "XLarge",
};

const { type, shape, color, size, icon } = toRefs(props);

let ColorSelected = ref<string>("");
// 转换颜色 将color 属性转换
const ColorSeletct = () => {
  if (ColorTypes.includes(color?.value as any)) {
    ColorSelected.value = color?.value as any;
    return;
  }

  const isTextDark = isContrastWithWhiteSimpl(color?.value as any);
  if (isTextDark) {
    BtnRef.value?.style.setProperty("--btn-text-color", "white");
  }

  BtnRef.value?.style.setProperty("--btn-color", color?.value as any);
  BtnRef.value?.style.setProperty("--btn-active-color", color?.value as any);
};

// 修改配置size
const buttonSize = (_size: string) => {
  if (_size == "") {
    return buttonAttribute.size || "medium";
  } else {
    return _size;
  }
};

onMounted(() => {
  if (color?.value != undefined) {
    ColorSeletct();
  }
});
</script>