import vue from '@vitejs/plugin-vue';
import { mergeConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: {
        plugin: 'vue-component-meta',
        tsconfig: '../tsconfig.json',
      },
    },
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      plugins: [vue()],
      css: {
        postcss: {
          plugins: [tailwindcss(), autoprefixer()],
        },
      },
      optimizeDeps: {
        include: ['jsdoc-type-pratt-parser'],
      },
    });
  },
};

export default config;
