import styled from '@emotion/styled';

const InputWrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
`;

const NameInput = styled.input<{ status: boolean }>`
  position: relative;
  border: 0.1rem solid;
  border-radius: 0.8rem;
  border-color: ${(props) =>
    props.status
      ? props.theme.colors.secondary.red
      : props.theme.colors.grayscale.gray_100};
  background-color: ${(props) => props.theme.colors.grayscale.gray_100};
  padding: 1.4rem 1.6rem;
  width: 100%;
  height: 4.8rem;
  font-size: 1.6rem;
`;

const CountWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Warning = styled.div<{ status: boolean }>`
  visibility: ${(props) => (props.status ? '' : 'hidden')};
  color: ${(props) => props.theme.colors.secondary.red};
`;

const CountInput = styled.div<{ status: boolean }>`
  margin: 0.5rem 0 0;
  text-align: right;
  color: ${(props) =>
    props.status
      ? props.theme.colors.secondary.red
      : props.theme.colors.grayscale.gray_500};
  font-size: 1rem;
  font-weight: 500;
`;

const EditBtn = styled.button<{ isError: boolean }>`
  margin: 2rem 0 0;
  border-radius: 1rem;
  background-color: ${(props) => (props.isError ? '#CACFD8' : '#000000')};
  width: 100%;
  height: 4.8rem;
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 1.6rem;
  font-weight: 600;
`;

export { InputWrap, NameInput, CountWrap, CountInput, Warning, EditBtn };
