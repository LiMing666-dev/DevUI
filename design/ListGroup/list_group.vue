<template>
  <div class="D_List_Group">
    <div class="D_List_Group_Title">
      <slot name="activator"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "DListGroup",
});
</script>