<template>
  <div class="Input">
    <div class="InputName">输入框</div>
    <div class="InputBox">
      <input
        class="InputText"
        v-model="value"
        name="inputText"
        type="text"
        @input="valueChange"
        @focus="valueFocus"
        @blur="valueBlur"
      />
      <div class="InputLine"></div>
      <div class="InputLine1" :class="{ LineActive: isActive }"></div>
    </div>
    <div class="InputDocs">输入你的提示</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue";

const isActive = ref<boolean>(false);

const props = defineProps({
  /**
   * 按钮类型
   */
  type: {
    type: String as () => "primary" | "outline" | "subtle" | "transparent",
    default: undefined,
  },
  color: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue", "blur", "focus", "change"]);

const { modelValue } = toRefs(props);

const value = ref<string>(modelValue?.value);

const valueChange = (val: any) => {
  emit("update:modelValue", val.target.value);
};

const valueFocus = (val: any) => {
  isActive.value = true;
  console.log("获取焦点");
};

const valueBlur = (val: any) => {
  isActive.value = false;
  console.log("失去焦点");
};

defineOptions({
  name: "DInput",
});
</script>