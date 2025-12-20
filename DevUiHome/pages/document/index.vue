<template>
  <div style="display: flex">
    <d-drawer>
      <d-list nav>
        <d-list-group>
          <template v-slot:activator="{ props }">
            <d-list-item v-bind="props" title="介绍"></d-list-item>
          </template>
        </d-list-group>
      </d-list>
    </d-drawer>
    <div style="width: 300px"></div>
    <div style="flex: 1">131</div>
  </div>
</template>