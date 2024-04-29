// textbox.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import Textbox from './index';

const meta: Meta = {
  title: 'Makers Template/Atoms/Textbox',
  component: Textbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Etiqueta para el Textbox.',
    },
    placeholder: {
      control: 'text',
      description: 'Texto de marcador de posición para el Textbox.',
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'password', 'number', 'date'],
      },
      description: 'Tipo de input del Textbox.',
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'third'],
      },
      description: 'Color del Textbox (primario, secundario o terciario).',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    type: 'text',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    color: 'secondary',
  },
};

export const Third: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    color: 'third',
  },
};



