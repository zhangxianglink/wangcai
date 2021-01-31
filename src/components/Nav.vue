<template>
  <nav>
    <router-link class="item" to="/">
      <Icons name="money"></Icons>
      记账
    </router-link>
    
    <router-link class="item" to="/lables">
      <Icons name="Lable"> </Icons>
      标签
    </router-link>
    
    <router-link class="item" to="/statistics">
      <Icons name="statistics"></Icons>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 0 2px rgb(0 0 0 / 5%);
  flex-direction: row;
  font-size: 14px;
  > .item {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    padding: 1px 0 2px 0;
  }
    .icon {
      width: 31px;
      height: 31px;
    }
}
.router-link-active {
    text-decoration: none;
}
</style>
