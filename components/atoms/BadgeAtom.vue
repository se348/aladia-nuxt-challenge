<template>
    <span
      :class="[
        'inline-block px-3 py-1 text-xs font-semibold rounded-full',
        customClass
      ]"
    >
      <slot />
    </span>
  </template>
  
  <script>
  export default {
    props: {
      customClass: {
        type: String,
        default: 'bg-gray-200 text-gray-700',
      },
    },
  };
  </script>
  