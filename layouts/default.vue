<!-- layouts/default.vue -->
<template>
  <main class="flex-grow relative z-10 min-h-screen">
    <!-- Header -->
    <MainHeader :brand="brandName" @search="handleSearch" />

    <slot />
     <!-- Footer -->
     <Footer :brand="brandName" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import MainHeader from "@/components/organisms/MainHeader.vue";
import Footer from "@/components/organisms/Footer.vue";

</script>