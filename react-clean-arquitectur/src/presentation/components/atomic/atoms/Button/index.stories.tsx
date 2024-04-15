import type { Meta, StoryObj } from '@storybook/react';
 
import Button from './index';
 
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Tuya Template/Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
            description: 'Contenido del botón (texto o elementos React).',
        },
        className: {
            control: 'text',
            description: 'Clases Tailwindcss adicionales para personalizar el estilo del boton',
        },
        onClick: {
            control: 'function',
            description: 'Funcion que se ejecutara, cuando se haga clic en el boton',
        },
        disabled: {
            control: 'boolean',
            description: 'Permite deshabilitar el boton',
        },
        type: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'third'],
            },
            description: "Tipo de estilo del botón (primario, secundario o terciario).",
        }
    },
} satisfies Meta<typeof Button>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
 
export const Primary: Story = {
    args: {
        children: 'Primario',
        type: 'primary',
    },
};
 
export const Secondary: Story = {
    args: {
        children: 'Secundario',
        type: 'secondary',
    },
};
 
export const Third: Story = {
    args: {
        children: 'Terciario',
        type: 'third',
    },
};
 