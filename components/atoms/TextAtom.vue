<template>
    <p :class="customClass">{{ text }}</p>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      customClass: {
        type: String,
        default: '',
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles if needed */
  </style>