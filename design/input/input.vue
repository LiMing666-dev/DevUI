<template>
  <div class="Input">
    <div class="InputName">输入框</div>
    <div class="InputBox">
      <input class="InputText" name="inputText" type="text" />
      <div class="InputLine"></div>
      <div class="InputLine1"></div>
    </div>
    <div class="InputDocs">输入你的提示</div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "DInput",
});
</script>