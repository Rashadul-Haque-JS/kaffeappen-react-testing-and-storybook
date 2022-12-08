import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonComponent from './button';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

//Varje export blir en variant av komponenten -> visas i menyn till vänster i Storybook
export const Login = Template.bind({});
export const Register = Template.bind({});
//I detta objekt anges vilka props komponenten ska renderas med
Login.args = {variant:'primary', children: 'Log In' };
Register.args = {variant:'secondary', children: 'Register' };