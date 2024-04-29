// combobox.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import ComboBox from './index';

const meta: Meta = {
  title: 'Makers Template/Atoms/ComboBox',
  component: ComboBox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
      description: 'Estilo del ComboBox (primario, secundario o terciario).',
    },
    options: {
      control: 'array',
      description: 'Opciones del ComboBox.',
    },
    defaultValue: {
      control: 'text',
      description: 'Valor predeterminado del ComboBox.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    options: ['Option 1', 'Option 2', 'Option 3'],
    defaultValue: 'Option 1',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    options: ['Option A', 'Option B', 'Option C'],
    defaultValue: 'Option A',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    options: ['Value X', 'Value Y', 'Value Z'],
    defaultValue: 'Value X',
  },
};
