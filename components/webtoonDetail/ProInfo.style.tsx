import styled from '@emotion/styled';

const ProInfoWrap = styled.div`
  position: absolute;
  top: 45rem;
  right: 10rem;
  margin-bottom: 20px;
`;

const ContentBasicInfo = styled.span`
  display: inline-block;
  margin: 1.1rem;
  color: ${(props) => props.theme.colors.black};
  font-family: notokr-medium;
  font-size: 1.6rem;
`;

const ContentBar = styled.p`
  display: inline-block;
  background: #cfcfcf;
  width: 0.2rem;
  height: 1.4rem;
`;

export { ProInfoWrap, ContentBasicInfo, ContentBar };
