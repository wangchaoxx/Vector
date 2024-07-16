import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import Button from '../components/Button/index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['large', 'middle', 'small'] },
    ghost: { control: 'boolean' },
    type: { control: 'select', options: ['primary', 'ghost', 'dashed', 'text'] },
    danger: { control: 'boolean' },
  },
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        component: '按钮用于开始一个即时操作。',
      }
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    type: 'primary',
  },
  parameters: {
    docs: {
      source: {
        code: '<MyButton label="Primary Button" type="primary" ></MyButton>',
      },
    },
  },
};

export const Default: Story = {
  args: {
    label: 'Default Button',
    onClick: () => console.log('Dashed button clicked!'),
  },
};

export const Dashed: Story = {
  args: {
    label: 'Dashed Button',
    type: 'dashed',
  },
  parameters: {
    docs: {
      source: {
        code: '<MyButton label="Dashed Button" type="dashed" ></MyButton>',
      },
    },
  },
};

export const Text: Story = {
  args: {
    label: 'Text Button',
    type: 'text',
  },
  parameters: {
    docs: {
      source: {
        code: '<MyButton label="Text Button" type="text" ></MyButton>',
      },
    },
  },
};
export const Link: Story = {
  args: {
    label: 'Link Button',
    type: 'link',
  },
  parameters: {
    docs: {
      source: {
        code: '<MyButton label="Link Button" type="link" ></MyButton>',
      },
    },
  },
};
