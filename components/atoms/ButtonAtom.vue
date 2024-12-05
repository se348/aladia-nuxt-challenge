<template>
  <button
    :class="[
      'px-4 py-2 rounded-lg text-sm justify-center font-medium flex items-center gap-2',
      isPrimary ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
      customClass
    ]"
    :type="type"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    isPrimary: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
};
</script>
