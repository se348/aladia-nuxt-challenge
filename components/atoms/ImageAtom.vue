<template>
  <img
    :src="src"
    :alt="alt"
    :style="{ width: size ? size : '100%', height: size ? size : 'auto' }"
    class="h-auto object-cover"
    loading="lazy"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },
};
</script>