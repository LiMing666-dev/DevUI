<template>
  <div
    ref="BtnRef"
    class="Button"
    :class="[
      `Button-${type}`,
      `Button-color-${ColorSelected}`,
      `Button-size-${size}`,
      `d-borderRadius-${ShapeList[shape || 'default']}`,
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, toRefs } from "vue";
import { isContrastWithWhiteSimpl } from "../../composables/color";

defineOptions({
  name: "DButton",
});

// Btn Ref
const BtnRef = ref<HTMLElement | null>(null);

// Color Type 通用颜色类型
const ColorTypes: string[] = ["primaty", "success", "error"];

const props = defineProps({
  /**
   * 按钮类型
   */
  type: {
    type: String as () => "primary" | "outline" | "subtle" | "transparent",
    default: undefined,
  },
  shape: {
    type: String as () => "none" | "sm" | "lg" | "xl",
    default: undefined,
  },
  color: {
    type: String,
    default: undefined,
  },
  size: {
    type: String as () => "small" | "medium" | "large",
    default: "medium",
  },
});

// shape 数组类型映射
const ShapeList = {
  none: "None",
  sm: "Small",
  default: "Medium",
  lg: "Large",
  xl: "XLarge",
};

const { type, shape, color, size } = toRefs(props);

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

onMounted(() => {
  if (color?.value != undefined) {
    ColorSeletct();
  }
});
</script>