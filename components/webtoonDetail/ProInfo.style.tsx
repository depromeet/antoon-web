import styled from '@emotion/styled';

const ProInfoWrap = styled.div`
  margin-bottom: 20px;
  position: absolute;
  top: 45rem;
  right: 10rem;
`;

const ContentBasicInfo = styled.span`
  display: inline-block;
  margin: 1.1rem;
  font-family: 'notokr-medium';
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.black};
`;

const ContentBar = styled.p`
  display: inline-block;
  width: 0.2rem;
  height: 1.4rem;
  background: #cfcfcf;
`;

export { ProInfoWrap, ContentBasicInfo, ContentBar };
