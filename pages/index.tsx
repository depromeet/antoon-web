import type { NextPage } from 'next';
import { default as _Home } from '@domains/webtoon/home/Home';
import Header from '@components/layout/Header';

const Home: NextPage = () => {
  console.log(
    '        /   |   / | / /___  __// __  // __  / / | / /\n\
       / /| |  /  |/ /  /  /  / / / // / / / /  |/ / \n\
      / /_| | / / | /  /  /  / /_/ // /_/ / / / | /  \n\
     /_/  |_|/_/  |/  /__/   \\____/ \\____/ /_/  |/ ',
  );

  return (
    <>
      <Header leftBtn="logo" />
      <_Home />
    </>
  );
};

export default Home;
