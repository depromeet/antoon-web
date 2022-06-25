import styled from '@emotion/styled';

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

export { SettingText, PolicyLink };
