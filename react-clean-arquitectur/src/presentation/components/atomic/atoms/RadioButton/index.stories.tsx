import type { Meta, StoryObj } from '@storybook/react';
 
import RadioButton from './index';
 
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Makers Template/Atoms/RadioButton',
    component: RadioButton,
    tags: ['autodocs'],
    argTypes: {
        
        id: {
            control: 'text',
            description: 'id del radio',
        },
        isChecked: {
            control: 'boolean',
            description: 'Permite deshabilitar el boton',
        },
        onClick: {
            control: 'function',
            description: 'Funcion que se ejecutara, cuando se haga clic en el boton',
        },                
    },
} satisfies Meta<typeof RadioButton>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
 
export const Default: Story = {
    args: {
        id: 'radioButton1',
    },
};
 