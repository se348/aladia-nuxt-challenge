<template>
    <section class="p-6">
      <TypographyAtom tag="h2" customClass="text-center text-2xl font-bold mb-2 text-gray-800 uppercase">
        Explore the Latest Trends and Timeless Classics
      </TypographyAtom>
      <TypographyAtom tag="h6" customClass="text-center text-xs font-semibold mb-4 text-gray-600">
        Dive into the world of fashion excellence at StyleLoom. Our curated selection brings together the latest trends and timeless classics
      </TypographyAtom>
      <ProductGrid :products="products" @add-to-cart="$emit('add-to-cart', $event)" />
      <!--Ad Banner Section-->
        <AdBanner
          headline="Special Offer!"
          subheading="Get 50% off on all items."
          ctaText="Shop Now"
          image="images/ecommerce.jpg"
        />
    </section>
  </template>
  
  <script>
  import TypographyAtom from "@/components/atoms/TypographyAtom.vue";
  import ProductGrid from "@/components/molecules/ProductGrid.vue";
  import AdBanner from "@/components/molecules/AdBanner.vue";
  
  export default {
    components: {
      TypographyAtom,
      ProductGrid,
      AdBanner,
    },
    props: {
      products: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  