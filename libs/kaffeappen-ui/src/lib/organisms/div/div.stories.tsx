import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonComponent from '../../atoms/button/button';
import InputComponent from '../../atoms/input/input';
import FormComponent from '../../molecules/form/form';
import DivComponent from '../../organisms/div/div';
import HeadlineComponent from '../../atoms/headline/headline';

export default {
  title: 'Example/Div',
  component: DivComponent,
  argTypes: {
    background: { control: 'url' },
  },
} as ComponentMeta<typeof DivComponent>;

const Template: ComponentStory<typeof DivComponent> = (args) => (
  <DivComponent {...args} />
);

//Varje export blir en variant av komponenten -> visas i menyn till vänster i Storybook
export const AppBody = Template.bind({});

//I detta objekt anges vilka props komponenten ska renderas med
AppBody.args = {
  children: [
    <DivComponent>
      <HeadlineComponent>kaffeappen</HeadlineComponent>
      <FormComponent>
        <InputComponent placeholder="användarnamn" type={'text'} />
        <InputComponent placeholder="lösenord" type={'password'} />
        <ButtonComponent
          variant="primary"
          marginTop={66}
          
        >
          Logga In
        </ButtonComponent>
      </FormComponent>
  {/* Use of Button components in another way */}
      <ButtonComponent
        children="Registrera"
        variant="secondary"
        marginTop={2}
        
      />
    </DivComponent>,
  ],
};
