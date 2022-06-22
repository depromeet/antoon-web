import { ReactChild } from 'react';
import styled from '@emotion/styled';

type Type = 'small' | 'normal' | 'big';

const Text = styled.div<{ type: Type }>`
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: ${(props) => {
    switch (props.type) {
      case 'small':
        return '1rem';
      case 'normal':
        return '1.2rem';
      case 'big':
        return '1.4rem';
    }
  }};
  font-weight: 500;
`;

type Props = {
  type: Type;
  children: ReactChild;
};

function SubTitle(props: Props) {
  const { type, children } = props;

  return <Text type={type}>{children}</Text>;
}

export default SubTitle;
