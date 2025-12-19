<template>
  <div>
    <d-main>
      <d-container interval="100">
        <div
          class=""
          style="
            margin-top: 40px;
            display: flex;
            gap: 40px;
            justify-content: center;
          "
        >
          <d-img
            width="300px"
            height="300px"
            src="../../../public/vite.svg"
          ></d-img>
          <div>
            <div style="font-size: 30px; font-weight: 700">
              DevUI（开发者UI）一个专注于Vue组件库
            </div>
            <div style="margin-top: 20px; color: #ccc">
              基于Fluent
              UI规范制作的一个组件库，用于构建丰富的用户界面，快速搭建前端网站
            </div>
            <div style="margin-top: 20px">
              <d-button type="primary" size="large" prependIcon="allergy"
                >快速入门</d-button
              >
              <d-button
                style="margin-left: 20px"
                color="#000000"
                size="large"
                prependIcon="github"
                >GitHub</d-button
              >
            </div>
          </div>
        </div>
      </d-container>
    </d-main>
  </div>
</template>


<script lang="ts" setup>
</script>

<style lang="scss" scoped>

</style>