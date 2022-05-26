import { ComponentStory, ComponentMeta } from '@storybook/react';

import FloatingBtn from './FloatingBtn';

export default {
  title: 'Components/Common/Button',
  component: FloatingBtn,
} as ComponentMeta<typeof FloatingBtn>;

const Template: ComponentStory<typeof FloatingBtn> = () => <FloatingBtn />;

export const 피드백_버튼 = Template.bind({});
