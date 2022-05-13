import styled from '@emotion/styled';

const MyPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.6rem auto 0;
`;

const Menu = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
`;

const SettingText = styled.span`
  color: ${(props) => props.theme.colors.grayscale.gray_600};
  font-size: 1.4rem;
  font-weight: 400;
`;

const PolicyLink = styled.a<{ margin: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${(props) => props.margin};
  width: 100%;
`;

const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
`;

export { MyPageWrap, Menu, SettingText, PolicyLink, LogOutBtn };
