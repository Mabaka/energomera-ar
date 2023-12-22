<template>
  <AppHeader v-if="!$route.meta.hideHeader" />
  <router-view />
</template>

<script setup>
import {AppHeader} from "@/layouts";
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
