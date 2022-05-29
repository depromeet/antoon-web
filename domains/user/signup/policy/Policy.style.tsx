import styled from '@emotion/styled';

const DescriptionMain = styled.p`
  padding-bottom: 1.2rem;
  color: ${(props) => props.theme.colors.grayscale.gray_1000};
  font-size: 2.4rem;
  font-weight: 800;
  user-select: none;
`;

const DescriptionSub = styled.p`
  padding-bottom: 13.6rem;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 1.6rem;
  user-select: none;
`;

const Hr = styled.hr`
  margin-bottom: 1.6rem;
  border: solid 0.05rem ${(props) => props.theme.colors.grayscale.gray_200};
`;

export { DescriptionMain, DescriptionSub, Hr };
