<template>
  <div
    ref="BtnRef"
    class="Button"
    :class="[
      `Button-${type}`,
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
});

// shape 数组类型映射
const ShapeList = {
  none: "None",
  sm: "Small",
  default: "Medium",
  lg: "Large",
  xl: "XLarge",
};

const { type, shape, color } = toRefs(props);

// 转换颜色 将color 属性转换
const ColorSeletct = () => {
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