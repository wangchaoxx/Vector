import { join, dirname } from "path";
import { mergeConfig } from 'vite';
const path = require('path');
import vue from '@vitejs/plugin-vue';



/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../../vector-vue/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/vue3-vite"),
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../../vector-vue/src'),
        },
      },
      server: {
        fs: {
          allow: ['..'],
        },
      },
    });
  },
};
export default config;
