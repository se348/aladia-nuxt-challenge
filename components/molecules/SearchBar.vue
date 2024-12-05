<template>
    <div class="flex gap-2 items-center w-full">
        <div class="w-[300px] lg:w-[400px]">
            <InputAtom
              v-model="query"
              placeholder="Search for products..."
            />
        </div>
      <ButtonAtom
        isPrimary
        customClass="px-2"
        @click="$emit('search', query)"
      >
      <ImageAtom :src="searchIcon" alt="Search Icon" size="23px" />
      </ButtonAtom>
    </div>
  </template>
  
  <script>
  import InputAtom from "@/components/atoms/InputAtom.vue";
  import ButtonAtom from "@/components/atoms/ButtonAtom.vue";
  import ImageAtom from "@/components/atoms/ImageAtom.vue";
  import searchIcon from "@/public/images/search_icon.png";

  
  export default {
    components: {
      InputAtom,
      ButtonAtom,
      ImageAtom,
    },
    data() {
      return {
        searchIcon,
        query: '',
      };
    },
  };
  </script>
  