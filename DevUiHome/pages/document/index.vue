<template>
  <div style="display: flex">
    <d-drawer>
      <d-list nav>
        <d-list-group>
          <template v-slot:activator="{ props }">
            <d-list-item prependIcon="bookmark-minus-outline" v-bind="props" title="介绍"></d-list-item>
          </template>
          <d-list>
            <d-list-item title="DevUI发展"></d-list-item>
            <d-list-item title="DevUI发展"></d-list-item>
            <d-list-item title="DevUI发展"></d-list-item>
          </d-list>
        </d-list-group>
        <d-list-group>
          <template v-slot:activator="{ props }">
            <d-list-item prependIcon="video-input-component" v-bind="props" title="组件"></d-list-item>
          </template>
          <d-list>
            <d-list-item title="按钮（Button）" @click="$router.push('/button')"></d-list-item>
            <d-list-item title="卡片（Card）" @click="$router.push('/card')"></d-list-item>
            <d-list-item title="纸片（Chip）" @click="$router.push('/chip')"></d-list-item>
            <d-list-item title="对话框（Dialog）" @click="$router.push('/dialog')"></d-list-item>
            <d-list-item title="分格线（Divider）" @click="$router.push('/divider')"></d-list-item>
            <d-list-item title="列表（List）" @click="$router.push('/list')"></d-list-item>
            <d-list-item title="菜单（Menu）" @click="$router.push('/menu')"></d-list-item>
          </d-list>
        </d-list-group>
        <d-list-group>
          <template v-slot:activator="{ props }">
            <d-list-item prependIcon="alphabet-piqad" v-bind="props" title="指令"></d-list-item>
          </template>
          <d-list>
            <d-list-item title="外部点击"></d-list-item>
            <d-list-item title="Dom变动观察器"></d-list-item>
            <d-list-item title="缩放"></d-list-item>
          </d-list>
        </d-list-group>
      </d-list>
    </d-drawer>
    <div style="width: 300px"></div>
    <div style="flex: 1; box-sizing: border-box; padding: 20px">
      <router-view></router-view>
    </div>
  </div>
</template>