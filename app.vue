<script setup lang="ts">
import TopNavbar from '~/components/navbar/TopNavbar.vue'
</script>

<template>
  <div class="flex max-h-full min-h-[100vh] flex-grow flex-col overflow-auto bg-background">
    <NuxtLayout>
      <TopNavbar />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
