import styled from '@emotion/styled';

const MyPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 0;
`;

const Menu = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
`;

const SettingText = styled.div`
  margin: 3.6rem 0 0;
  font-size: 1.4rem;
  font-weight: 400;
`;

const PolicyLink = styled.a`
  display: block;
  margin: 2.8rem 0 0;
  width: 100%;
`;

const LogOutBtn = styled.div`
  margin: 5.8rem 0 0;
  width: 100%;
`;

export { MyPageWrap, Menu, SettingText, PolicyLink, LogOutBtn };
