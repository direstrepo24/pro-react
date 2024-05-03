// textbox.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import TextboxIcon from './index';
import IconText from '@presentation/assets/icons/IconText';

const meta: Meta = {
  title: 'Makers Template/Molecules/TextboxIcon',
  component: TextboxIcon,
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
    placeholder: '',
    type: 'text',
    color: 'primary',
    icon: <IconText />
  },
};

export const Secondary: Story = {
  args: {
    label: 'Email',
    placeholder: '',
    type: 'email',
    color: 'secondary',
    icon: <IconText />
  },
};

export const Third: Story = {
  args: {
    label: 'Password',
    placeholder: '',
    type: 'password',
    color: 'third',
    icon: <IconText />
  },
};