import styled from '@emotion/styled';

const CheckboxWrapper = styled.div<{ agreeAll?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  color: ${(props) =>
    props.agreeAll
      ? props.theme.colors.grayscale.gray_900
      : props.theme.colors.grayscale.gray_800};
  font-size: 1.6rem;
  font-weight: ${(props) => props.agreeAll && '600'};
  user-select: none;
`;

const CheckboxLabel = styled.label`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;

const CheckboxInput = styled.input`
  display: none;
  cursor: pointer;
`;

export { CheckboxWrapper, CheckboxLabel, CheckboxInput };
