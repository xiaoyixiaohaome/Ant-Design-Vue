<template>
  <div class="layouts-header">
    <a-layout-header class="header">
      <span class="cancel-class" @click="cancellation">注销</span>
    </a-layout-header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'layoutsHeader',
})
export default class layoutsHeader extends Vue {
  private collapsed : Boolean = false;

  // 注销点击事件
  cancellation() {
    this.$router.push('/login');
  }
}
</script>


<style lang="scss" scoped>
  .layouts-header{
    width: calc(100% - 200px);
    height: 46px;
    position: fixed;
    left: 200px;
    border: 1px solid #F3F3F3;

  }
  .header{
    background: #fff;
    padding: 0;
    height: 46px;
    .cancel-class{
      height: 100%;
      vertical-align: middle;
      // margin-right: 0 8px 8px 0;
      float: right;
      cursor: pointer;
    }
  }
</style>
