<template>
  <div class="Default">
    <a-layout class="layout-demo">
      <layout-sidebar></layout-sidebar>
      <layouts-header></layouts-header>
      <a-layout class="layout-class">
        <a-layout style="padding: 0 10px 10px">
          <a-breadcrumb style="margin: 5px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content :style="{ background: '#fff', margin: 0, minHeight: '280px' }">
            Content
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import layoutsHeader from './components/header/index.vue';
import layoutSidebar from './components/sidebar/index.vue';

@Component({
  name: 'Default',
  components: {
    layoutsHeader,
    layoutSidebar,
  },
})

export default class Default extends Vue {
  // private collapsed : Boolean = false;
}
</script>

<style lang="scss" scoped>
  .Default{
    width: 100%;
    height: 100%;
    background-color: lemonchiffon;
  }
  .layout-demo
  {
    position: relative;
    height: 100%;
    .layout-class{
      position: absolute;
      left: 200px;
      top: 46px;
      min-height: calc(100% - 46px);
      width: calc(100% - 200px);
    }
    .logo {
      width: 120px;
      height: 31px;
      background: rgba(255,255,255,.2);
      margin: 16px 28px 16px 0;
      float: left;
    }
  }
</style>
