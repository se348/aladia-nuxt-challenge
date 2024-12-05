<template>
  <div class="ad-banner bg-yellow-50 border border-yellow-400 shadow-lg rounded-lg flex items-center justify-between p-6 max-w-4xl mx-auto mt-2">
    <!-- Text Content -->
    <div class="ad-text">
      <h2 class="text-2xl font-bold text-red-600">{{ headline }}</h2>
      <p class="text-gray-600 mt-2">{{ subheading }}</p>
      <el-button
        type="success"
        size="large"
        class="mt-4"
        @click="handleClick"
      >
        {{ ctaText }}
      </el-button>
    </div>
    <el-image
      :src="image"
      alt="Ad Image"
      fit="cover"
      class="w-52 h-52 rounded-lg shadow-md"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  headline: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
  ctaText: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const handleClick = () => {
  console.log('Button clicked');
};
</script>
