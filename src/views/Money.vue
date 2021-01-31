<template>
  <div class="nav-wrapper">
    <div class="content">记账</div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-flow: column;
  height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>