import Header from '@components/layout/Header/Header';
import Checkbox from '@domains/user/policy/checkbox/Checkbox';
import { Mixpanel } from 'mixpanel';
import { useEffect } from 'react';

export const mock = [
  {
    id: 'servicePolicy',
    link: 'https://www.notion.so/depromeet/bac78d41379c4c8181532b3e1412ef10',
    label: '서비스 이용 약관',
  },
  {
    id: 'privacyPolicy',
    link: 'https://www.notion.so/depromeet/9b3b0e70be744bd889f154c06f7c2933',
    label: '개인정보 수집 및 이용동의',
  },
];

function Policy() {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '정책동의 페이지',
    });
  });

  return (
    <>
      <Header />
      {mock.map((item) => (
        <Checkbox key={item.id} id={item.id} link={item.link}>
          {item.label}
        </Checkbox>
      ))}
    </>
  );
}

export default Policy;
