<template>
    <div class="nav-wrapper">
    <div class="content">
        <slot/>
    </div>
    <Nav />
  </div>
</template>

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
