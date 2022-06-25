import { all } from '@pages/user/signup/policy';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
  title: 'Components/User/signup/policy/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const 전체_동의 = Template.bind({});
전체_동의.args = {
  id: '전체동의',
  message: '전체동의',
  agreeAll: true,
  checkedItems: all,
  isAllChecked: false,
};

export const 이용_약관 = Template.bind({});
이용_약관.args = {
  id: '(필수) 이용 약관 동의',
  message: '(필수) 이용 약관 동의',
  link: 'https://antoon-fun.notion.site/5b10fdba48ff4d868f8d67ff4b894d34',
  checkedItems: all,
  isAllChecked: false,
};

export const 개인정보_처리방침 = Template.bind({});
개인정보_처리방침.args = {
  id: '(필수) 개인정보 처리방침 동의',
  message: '(필수) 개인정보 처리방침 동의',
  link: 'https://antoon-fun.notion.site/5b10fdba48ff4d868f8d67ff4b894d34',
  checkedItems: all,
  isAllChecked: false,
};

export const 서비스_가이드_이용 = Template.bind({});
서비스_가이드_이용.args = {
  id: '(필수) 서비스 가이드 이용 동의',
  message: '(필수) 서비스 가이드 이용 동의',
  link: 'https://antoon-fun.notion.site/5b10fdba48ff4d868f8d67ff4b894d34',
  checkedItems: all,
  isAllChecked: false,
};

export const 마케팅_정보_수신 = Template.bind({});
마케팅_정보_수신.args = {
  id: '(선택) 마케팅 정보 수신 동의',
  message: '(선택) 마케팅 정보 수신 동의',
  link: 'https://antoon-fun.notion.site/5b10fdba48ff4d868f8d67ff4b894d34',
  checkedItems: all,
  isAllChecked: false,
};
