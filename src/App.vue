<template>
  <div id="app" class="warp">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
  }
}
</script>

<style>
@import '~@/assets/css/style.css';
</style>
