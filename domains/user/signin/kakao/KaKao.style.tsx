import styled from '@emotion/styled';

import Image from 'next/image';

const KakaoWrap = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const SignInBtn = styled.button`
  border: 1px solid ${(props) => props.theme.colors.black};
  background-color: #fae100;
  width: 100px;
  height: 30px;
`;

const SignOutBtn = styled.button`
  border: 1px solid ${(props) => props.theme.colors.black};
  background-color: #eee;
  width: 100px;
  height: 30px;
`;

const User = styled.div``;

const Name = styled.p`
  margin: 30px;
`;

const Email = styled.p`
  margin: 30px;
`;

const Img = styled(Image)``;

export { KakaoWrap, SignInBtn, SignOutBtn, User, Name, Email, Img };
