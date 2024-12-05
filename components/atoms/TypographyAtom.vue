<template>
    <component
      :is="tag"
      :class="[
        'font-medium',
        customClass
      ]"
    >
      <slot />
    </component>
  </template>
  
  <script>
  export default {
    props: {
      tag: {
        type: String,
        default: 'p',
      },
      customClass: {
        type: String,
        default: '',
      },
    },
  };
  </script>
  