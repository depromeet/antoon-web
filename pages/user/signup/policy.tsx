import { useEffect, useState } from 'react';
import { Mixpanel } from 'mixpanel';

import { LogoBig } from '@assets/icons';
import Header from '@components/layout/Header/Header';
import Checkbox from '@domains/user/signup/policy/Checkbox';
import {
  DescriptionMain,
  DescriptionSub,
  Hr,
} from '@domains/user/signup/policy/Policy.style';
import StartButton from '@domains/user/signup/policy/StartButton';

export const all = [
  '전체동의',
  '(필수) 이용 약관 동의',
  '(필수) 개인정보 처리방침 동의',
  '(필수) 서비스 가이드 이용 동의',
  '(선택) 마케팅 정보 수신 동의',
];

const essentials = [
  '(필수) 이용 약관 동의',
  '(필수) 개인정보 처리방침 동의',
  '(필수) 서비스 가이드 이용 동의',
];

function Policy() {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isAllEssentialChecked, setIsAllEssentialChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '정책동의 페이지',
    });
  }, []);

  useEffect(() => {
    checkedItems.length >= all.length - 1
      ? setIsAllChecked(true)
      : setIsAllChecked(false);

    setIsAllEssentialChecked(
      essentials.every((essentials) => checkedItems.includes(essentials)),
    );
  }, [checkedItems, isAllChecked]);

  return (
    <>
      <Header left="뒤로가기" right="없음" />
      <LogoBig style={{ margin: '2.4rem 0' }} />
      <DescriptionMain>
        개미는툰툰에
        <br />
        오신 걸 환영해요!
      </DescriptionMain>
      <DescriptionSub>서비스 이용을 위해 약관에 동의해주세요.</DescriptionSub>
      <Checkbox
        id="전체동의"
        message="전체동의"
        agreeAll
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        isAllChecked={isAllChecked}
      />
      <Hr />
      <Checkbox
        id="(필수) 이용 약관 동의"
        message="(필수) 이용 약관 동의"
        link="https://antoon-fun.notion.site/5b10fdba48ff4d868f8d67ff4b894d34"
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        isAllChecked={isAllChecked}
      />
      <Checkbox
        id="(필수) 개인정보 처리방침 동의"
        message="(필수) 개인정보 처리방침 동의"
        link="https://antoon-fun.notion.site/2693f5030fb24a4c9bd1c9ff958c680e"
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        isAllChecked={isAllChecked}
      />
      <Checkbox
        id="(필수) 서비스 가이드 이용 동의"
        message="(필수) 서비스 가이드 이용 동의"
        link="https://antoon-fun.notion.site/2aa542e12f9f4a828d0abef3542e572a"
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        isAllChecked={isAllChecked}
      />
      <Checkbox
        id="(선택) 마케팅 정보 수신 동의"
        message="(선택) 마케팅 정보 수신 동의"
        link="https://antoon-fun.notion.site/a43eb3a5139141658f41956a4a8c8941"
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        isAllChecked={isAllChecked}
      />
      <StartButton isAllEssentialChecked={isAllEssentialChecked} />
    </>
  );
}

export default Policy;
