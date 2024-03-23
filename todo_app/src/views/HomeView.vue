<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <main>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="200" height="200" />
    <HelloWorld msg="You did it!" />
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
</style>
