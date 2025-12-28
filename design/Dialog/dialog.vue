<template>
  <div class="D_Dialog" :class="{ D_Dialog_Activie: _modelValue }">
    <div class="D_Dialog_Activator">
      <slot name="activator" :props="slotPtops"></slot>
    </div>
    <div class="D_Dialog_Mask" @click="propsClick"></div>
    <div class="D_Dialog_Model">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
  }>(),
  {
    modelValue: false,
  }
);

const emit = defineEmits(["update:modelValue"]);

const { modelValue } = toRefs(props);

const _modelValue = ref<boolean>(modelValue.value);

const propsClick = () => {
  _modelValue.value = !_modelValue.value;
  emit("update:modelValue", _modelValue.value);
};

const slotPtops = reactive({
  onClick: propsClick,
});

defineOptions({
  name: "DDialog",
});
</script>