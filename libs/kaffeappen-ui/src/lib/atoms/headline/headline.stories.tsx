import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeadlineComponent from './headline';

export default {
  title: 'Example/Headline',
  component: HeadlineComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof HeadlineComponent>;

const Template: ComponentStory<typeof HeadlineComponent> = (args) => <HeadlineComponent {...args} />;

//Varje export blir en variant av komponenten -> visas i menyn till vänster i Storybook
export const Head = Template.bind({});

//I detta objekt anges vilka props komponenten ska renderas med
Head.args ={children:'kaffeappen'}