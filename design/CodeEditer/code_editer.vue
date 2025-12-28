<template>
  <div class="CodeEditer">
    <div class="CodeEditerHeader">
      <div class="CodeEditerHeaderLeft" type="">
        <d-button
          v-for="(item, index) in headerType"
          type="subtle"
          :key="index"
        >
          {{ item }}
        </d-button>
      </div>
      <div class="CodeEditerHeaderRight">
        <div style="width: 24px; height: 24px"></div>
      </div>
    </div>
    <div class="CodeEditerMain" :class="{ CodeMainBox: rightBox }">
      <div class="CodeEditerMain_Left">
        <slot></slot>
      </div>
      <div class="CodeEditerMain_Right"></div>
    </div>
    <div class="CodeEditerCode">
      <div class="CodeEditerCodeBox" v-html="html"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, toRefs } from "vue";
import { tokenizeJS, renderTokens } from "../../composables/codeToken";
const props = withDefaults(
  defineProps<{
    code: object;
    name: string;
    type: object;
    rightBox: boolean;
  }>(),
  {
    rightBox: false,
  }
);

const { code, name, type, rightBox } = toRefs(props);

const headerType = ref([]);

const fetch = () => {
  const _type: any = type.value;
  let _objList: any = [];
  Object.keys(_type).forEach((v) => {
    _objList.push(_type[v]);
  });
  headerType.value = _objList;
};

fetch();

defineOptions({
  name: "CodeEditer",
});

const text = "<d-button>默认按钮</d-button>";

const html = computed(() => renderTokens(tokenizeJS(text)));
</script>