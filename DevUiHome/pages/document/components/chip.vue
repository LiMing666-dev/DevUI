<template>
  <div class="PageBox">
    <div class="Box">
      <h4 class="BoxTitle">Chip 纸片</h4>
      <div class="BoxDocs">
        d-button是由Fluent UI主题设计的一个按钮，用与一个即使操作
      </div>
      <div style="margin-top: 20px; display: flex; gap: 10px">
        <d-chip prependIcon="pencil">修改本页</d-chip>
        <d-chip prependIcon="bug">报告bug</d-chip>
        <d-chip prependIcon="github">在github中查看</d-chip>
      </div>

      <div style="margin-top: 10px; margin-bottom: 10px">
        <div style="font-size: 20px; font-weight: 700">使用演示</div>
        <div style="font-size: 14px">
          下面是展示按钮的基础模式，搭配一些图标展示
        </div>
      </div>
      <code-editer :type="type">
        <d-chip>Chip</d-chip>
      </code-editer>
    </div>
    <div class="BoxRight"></div>
  </div>
</template>


<script lang="ts" setup>
const type = {
  primary: "primary",
  outline: "outline",
  subtle: "subtle",
  transparent: "transparent",
};
</script>

<style scoped lang="scss">
.PageBox {
  display: flex;

  .Box {
    flex: 1;
    //   width: 900px;
    //   margin: 0 auto;
    //   border: 1px solid #e7e7e7;
    box-sizing: border-box;
    //   padding: 20px;
    padding-right: 60px;
    .BoxTitle {
      font-size: 26px;
    }
    .BoxTitle2 {
      font-size: 22px;
      margin-top: 10px;
    }
  }

  .BoxRight {
    width: 240px;
    border: 1px red solid;
  }
}
</style>