<template>
  <div class="nav">
    <router-link to="/">
      <svg>
        <use xlink:href="#money"/>
      </svg>
      money
    </router-link>
    | <router-link to="/lables">lables</router-link> |
    <router-link to="/statistics">statistics</router-link>
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