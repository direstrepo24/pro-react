// checkbox.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './index';

const meta: Meta = {
  title: 'Makers Template/Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Etiqueta para el Checkbox.',
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'third'],
      },
      description: 'Color del Checkbox (primario, secundario o terciario).',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Option 1',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Option 2',
    color: 'secondary',
  },
};

export const Third: Story = {
  args: {
    label: 'Option 3',
    color: 'third',
  },
};