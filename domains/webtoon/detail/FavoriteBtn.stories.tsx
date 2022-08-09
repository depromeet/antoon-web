import { ComponentStory, ComponentMeta } from '@storybook/react';

import FavoriteBtn from './FavoriteButton';

export default {
  title: 'Components/Common/Button',
  component: FavoriteBtn,
} as ComponentMeta<typeof FavoriteBtn>;

const Template: ComponentStory<typeof FavoriteBtn> = (args) => (
  <FavoriteBtn {...args} />
);

export const 댓글_좋아요_버튼 = Template.bind({});

댓글_좋아요_버튼.args = {
  isFavoriteChecked: true,
};

댓글_좋아요_버튼.parameters = { actions: { handles: ['click button'] } };
