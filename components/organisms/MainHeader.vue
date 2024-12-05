<template>
    <header class="bg-gray-800 text-white p-6">
      <div class="mx-auto flex items-center justify-between">
        <TypographyAtom tag="h1" customClass="text-2xl font-bold ">
          {{ brand }}
        </TypographyAtom>
        <div >
            <SearchBar  @search="$emit('search', $event)" />
        </div>
      </div>
    </header>
  </template>
  
  <script>
  import TypographyAtom from "@/components/atoms/TypographyAtom.vue";
  import SearchBar from "@/components/molecules/SearchBar.vue";
  
  export default {
    components: {
      TypographyAtom,
      SearchBar,
    },
    props: {
      brand: {
        type: String,
        default: "My Store",
      },
    },
  };
  </script>
  