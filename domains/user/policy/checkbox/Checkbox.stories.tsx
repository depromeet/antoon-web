import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';
import { mock } from '../../../../pages/user/signup/policy';

export default {
  component: Checkbox,
  title: 'Checkbox',
} as ComponentMeta<typeof Checkbox>;

export const 서비스이용약관: ComponentStory<typeof Checkbox> = () => {
  const { id, link, label } = mock[0];

  return (
    <Checkbox id={id} link={link}>
      {label}
    </Checkbox>
  );
};

export const 개인정보수집및이용동의: ComponentStory<typeof Checkbox> = () => {
  const { id, link, label } = mock[1];

  return (
    <Checkbox id={id} link={link}>
      {label}
    </Checkbox>
  );
};
