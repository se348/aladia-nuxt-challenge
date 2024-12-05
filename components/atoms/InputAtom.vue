<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
    :class="[
      'px-4 py-2 border text-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-full',
      customClass
    ]"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
};
</script>
