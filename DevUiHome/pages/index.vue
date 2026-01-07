<template>
  <div>
    <d-app>
      <d-header >
        <div class="header">
          <div class="header_left">
            <d-img src="../../../public/logo.webp"></d-img>
            <d-button type="subtle" prependIcon="magnify" style="margin-left: 10px;"
              >搜索

              <template #appendIcon>
                <d-chip>cmd+k</d-chip>
              </template>
            </d-button>
          </div>
          <div class="header_right">
            <d-button type="subtle">博客</d-button>
            <d-menu>
              <template v-slot:activator="{ props }">
                <d-button v-bind="props" type="subtle" appendIcon="chevron-down"
                  >文档</d-button
                >
              </template>
              <d-list>
                <d-list-item appendIcon="bug-outline">报告Bug</d-list-item>
                <d-list-item>开发历史</d-list-item>
              </d-list>
            </d-menu>
            <d-menu>
              <template v-slot:activator="{ props }">
                <d-button v-bind="props" type="subtle" appendIcon="chevron-down"
                  >支持</d-button
                >
              </template>
              <d-list>
                <d-list-item appendIcon="bug-outline">报告Bug</d-list-item>
                <d-list-item>开发历史</d-list-item>
              </d-list>
            </d-menu>
          </div>
        </div>
      </d-header>
      <router-view></router-view>
    </d-app>
  </div>
</template>


<style lang="scss" scoped>
.header {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
  .header_left {
    display: flex;
    align-items: center;
  }
  .header_right {
    display: flex;
    align-items: center;
  }
}
</style>