import { ComponentStory, ComponentMeta } from '@storybook/react';

import FavoriteBtn from './FavoriteBtn';

export default {
  title: 'Components/Common/Button',
  component: FavoriteBtn,
} as ComponentMeta<typeof FavoriteBtn>;

const Template: ComponentStory<typeof FavoriteBtn> = (args) => (
  <FavoriteBtn {...args} />
);

export const FavoriteButton = Template.bind({});
FavoriteButton.args = {
  isFavoriteChecked: true,
};
FavoriteButton.parameters = { actions: { handles: ['click button'] } };
