<template>
  <div class="bg-white min-h-screen">
    <!-- Featured Products Section -->
    <FeaturedProducts
      :products="featuredProducts"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script>
import MainHeader from "@/components/organisms/MainHeader.vue";
import FeaturedProducts from "@/components/organisms/FeaturedProducts.vue";
import Footer from "@/components/organisms/Footer.vue";
import { featuredProducts } from "@/data/products.js";
export default {
  components: {
    MainHeader,
    FeaturedProducts,
    Footer,
  },
  data() {
    return {
      brandName: "My E-Commerce",
      featuredProducts: featuredProducts,
    };
  },
  methods: {
    handleSearch(query) {
      console.log("Search for:", query);
    },
    addToCart(product) {
      console.log("Add to cart:", product);
    },
    viewAll(collectionTitle) {
      console.log("View all products in:", collectionTitle);
    },
  },
};
</script>
