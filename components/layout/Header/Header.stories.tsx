import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Components/Layout/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const 메인_페이지 = Template.bind({});
메인_페이지.args = {
  leftBtn: 'logo',
  rightBtn: 'menu',
};

export const 장르별_페이지 = Template.bind({});
장르별_페이지.args = {
  title: '장르별',
  rightBtn: 'menu',
};

export const 상세_페이지 = Template.bind({});
상세_페이지.args = {
  rightBtn: 'share',
};

export const 마이_페이지 = Template.bind({});
마이_페이지.args = {
  title: '마이페이지',
};

export const 닉네임_수정 = Template.bind({});
닉네임_수정.args = {
  title: '닉네임 수정',
};

export const 로그인_정책동의 = Template.bind({});
로그인_정책동의.args = {};
