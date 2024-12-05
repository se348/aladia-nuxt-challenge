<template>
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto text-center">
        <TypographyAtom tag="p" customClass="text-sm">
          © {{ new Date().getFullYear() }} {{ brand }}. All rights reserved.
        </TypographyAtom>
      </div>
    </footer>
  </template>
  
  <script>
  import TypographyAtom from "@/components/atoms/TypographyAtom.vue";
  
  export default {
    components: {
      TypographyAtom,
    },
    props: {
      brand: {
        type: String,
        default: "My Store",
      },
    },
  };
  </script>
  