import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputComponent from './input';

export default {
  title: 'Example/Input',
  component: InputComponent,
  argTypes: {
    placeholder: { control: 'text' },
  },
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />;

//Varje export blir en variant av komponenten -> visas i menyn till vänster i Storybook
export const UserName = Template.bind({});
export const Password = Template.bind({});
//I detta objekt anges vilka props komponenten ska renderas med
UserName.args = {placeholder:'användarnamn' };
Password.args = {placeholder:'lösenord' };