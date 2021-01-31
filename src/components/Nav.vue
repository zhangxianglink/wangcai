<template>
  <div class="nav">
    <router-link to="/">
      <Icons name="money"></Icons>
      money
    </router-link>
    |
    <router-link to="/lables"> <Icons name="Lable"> </Icons>lables</router-link>
    |
    <router-link to="/statistics">
      <Icons name="statistics"></Icons>statistics</router-link
    >
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid green;
}
</style>