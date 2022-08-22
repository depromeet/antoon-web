import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '@components/layout/Header/Header';

export default {
  title: 'Components/Layout/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const 메인_페이지 = Template.bind({});
메인_페이지.args = {
  left: '로고',
  right: '검색',
};

export const 상세_페이지 = Template.bind({});
상세_페이지.args = {
  left: '뒤로가기',
  right: '공유하기',
};

export const 마이_페이지 = Template.bind({});
마이_페이지.args = {
  left: '로고',
  title: '마이페이지',
  right: '검색',
};

export const 닉네임_수정 = Template.bind({});
닉네임_수정.args = {
  left: '뒤로가기',
  title: '프로필 수정',
  right: '없음',
};
