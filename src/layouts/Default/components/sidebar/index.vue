<template>
  <div class="layouts-sidebar">
    <a-layout-sider
      width="200"
      style="background: #fff"
      :trigger="null"
      collapsible
      v-model="collapsed">
      <div class="logo">VTA管理系统</div>
      <a-menu
        mode="inline"
        :defaultSelectedKeys="['1']"
        :defaultOpenKeys="['sub1']"
        :style="{ height: '100%', borderRight: 0 }"
      >
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" />subnav 1</span>
          <a-menu-item key="1">option1</a-menu-item>
          <a-menu-item key="2">option2</a-menu-item>
          <a-menu-item key="3">option3</a-menu-item>
          <a-menu-item key="4">option4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="laptop" />subnav 2</span>
          <a-menu-item key="5">option5</a-menu-item>
          <a-menu-item key="6">option6</a-menu-item>
          <a-menu-item key="7">option7</a-menu-item>
          <a-menu-item key="8">option8</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="notification" />subnav 3</span>
          <a-menu-item key="9">option9</a-menu-item>
          <a-menu-item key="10">option10</a-menu-item>
          <a-menu-item key="11">option11</a-menu-item>
          <a-menu-item key="12">option12</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'layoutSidebar',
})
export default class layoutSidebar extends Vue {
  private collapsed : Boolean = false;
}
</script>


<style lang="scss" scoped>
  .layouts-sidebar{
    background: #fff;
    float: left;
    height: 100%;
    position: fixed;
    .ant-layout-sider{
      .ant-layout-sider-children{
        position: relative;
        .logo {
          width: 200px;
          height: 46px;
          background: #00B5F9;
          color: #fff;
          text-align: center;
          padding-top: 8px;
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
  }
</style>
