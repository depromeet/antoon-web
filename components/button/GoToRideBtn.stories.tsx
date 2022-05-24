import { ComponentStory, ComponentMeta } from '@storybook/react';

import GoToRideBtn from './GoToRideBtn';

export default {
  title: 'Components/Common/Button',
  component: GoToRideBtn,
} as ComponentMeta<typeof GoToRideBtn>;

const Template: ComponentStory<typeof GoToRideBtn> = (args) => (
  <GoToRideBtn {...args} />
);

export const 탑승하러가기_버튼 = Template.bind({});

탑승하러가기_버튼.args = {
  content: '탑승하러 가기',
};
