<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="$emit('add-to-cart', product)"
      />
    </div>
  </template>
  
  <script>
  import ProductCard from "@/components/molecules/ProductCard.vue";
  
  export default {
    components: {
      ProductCard,
    },
    props: {
      products: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  