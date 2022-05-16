import { ComponentMeta } from '@storybook/react';

import Home from './Home';

export default {
  component: Home,
  title: '홈 페이지',
} as ComponentMeta<typeof Home>;

// TODO: api 문제 해결
// export const 홈: ComponentStory<typeof Home> = () => {
//   return <Home />;
// };
