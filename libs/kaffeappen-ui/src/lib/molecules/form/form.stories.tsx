import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonComponent from '../../atoms/button/button';
import InputComponent from '../../atoms/input/input';
import FormComponent from './form';

export default {
  title: 'Example/Form',
  component: FormComponent,
  argTypes: {
    background: { control: 'color' },
  },
} as ComponentMeta<typeof FormComponent>;

const Template: ComponentStory<typeof FormComponent> = (args) => (
  <FormComponent {...args} />
);

//Varje export blir en variant av komponenten -> visas i menyn till vänster i Storybook
export const Form = Template.bind({});

//I detta objekt anges vilka props komponenten ska renderas med
Form.args = {
  children: [
    <InputComponent placeholder="användernamn" type={'text'} />,
    <InputComponent placeholder="lösenord" type={'password'} />,
    <ButtonComponent children="Logga In" variant="primary" marginTop={40} />,
  ],
};
