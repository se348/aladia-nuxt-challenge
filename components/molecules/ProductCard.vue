<template>
    <div class="rounded-t-[45px] shadow-md rounded-b-lg">
      <ImageAtom :src="product.image" :alt="product.name" />
      <div class="p-4 border border-gray-300 rounded-b-lg">
        <BadgeAtom v-if="product.tags.length" class="mb-2">
          {{ product.tags[0] }}
        </BadgeAtom>
        <TypographyAtom tag="h3" customClass="text-lg font-semibold mb-1">
          {{ product.name }}
        </TypographyAtom>
        <p class="text-sm text-gray-600 mb-2">Fit: {{ product.fit }}</p>
        <p class="text-xl font-bold text-primary">Price: ${{ product.price }}</p>
        <ButtonAtom
          isPrimary
          customClass="mt-4 w-full"
          @click="$emit('add-to-cart', product)"
        >
          Shop Now
        </ButtonAtom>
      </div>
    </div>
  </template>
  
  <script>
  import ImageAtom from "@/components/atoms/ImageAtom.vue";
  import TypographyAtom from "@/components/atoms/TypographyAtom.vue";
  import BadgeAtom from "@/components/atoms/BadgeAtom.vue";
  import ButtonAtom from "@/components/atoms/ButtonAtom.vue";
  
  export default {
    components: {
      ImageAtom,
      TypographyAtom,
      BadgeAtom,
      ButtonAtom,
    },
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  