import { ReactChild } from 'react';
import styled from '@emotion/styled';

type Type = 'small' | 'normal' | 'big';

const Text = styled.h1<{ type: Type }>`
  line-height: 1.4;
  font-size: ${(props) => {
    switch (props.type) {
      case 'small':
        return '1.6rem';
      case 'normal':
        return '2.0rem';
      case 'big':
        return '2.4rem';
    }
  }};
  font-weight: 800;
`;

type Props = {
  type: Type;
  children: ReactChild;
};

function Title(props: Props) {
  const { type, children } = props;

  return <Text type={type}>{children}</Text>;
}

export default Title;
