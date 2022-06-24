import { ComponentStory, ComponentMeta } from '@storybook/react';

import TagBtn from './TagBtn';

export default {
  title: 'Components/Common/Button',
  component: TagBtn,
} as ComponentMeta<typeof TagBtn>;

const Template: ComponentStory<typeof TagBtn> = (args) => (
  <TagBtn>{args.children}</TagBtn>
);

export const 태그_버튼 = Template.bind({});

태그_버튼.args = {
  children: '인기순',
};
