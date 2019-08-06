<template>
  <div class="login">
    <div class="login-class"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'login',
})

export default class Default extends Vue {
  // private collapsed : Boolean = false;
}
</script>

<style lang="scss" scoped>
  .login{
    height: 100%;
    background-image: url('../../assets/login-bg.png');
    position: relative;
  }
  .login-class{
    background: white;
    width: 30%;
    height: 55%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 30px;
  }
</style>
