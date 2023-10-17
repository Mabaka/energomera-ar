<template>
  <AppHeader v-if="!$route.meta.hideHeader" />
  <router-view />
</template>

<script setup>
import {AppHeader} from "@/layouts";
import {HomeView} from "@/views";
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
