import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  // stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"],
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx|vue)'],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true, // 如果你想在MDX中使用JSX，需要将此选项设置为true
      },
    },
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    // Customize the Vite config here
    return config;
  },
};
export default config;
