<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected" >
      <Icons name="money"></Icons>
      记账
    </router-link>
    
    <router-link  to="/lables" class="item" active-class="selected">
      <Icons name="Lable"> </Icons>
      标签
    </router-link>
    
    <router-link to="/statistics" class="item" active-class="selected" >
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
  > .item.selected {
    color: rgb(101, 243, 96);
    fill: rgb(101, 243, 96);
  }
}
</style>
