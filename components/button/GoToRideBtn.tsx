import styled from '@emotion/styled';
import Link from 'next/link';

type Props = {
  content: string;
};

function GoToRideButton(props: Props) {
  const { content } = props;

  return (
    <Link href="/#realtime-chart" passHref>
      <Btn>{content}</Btn>
    </Link>
  );
}

const Btn = styled.button`
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.secondary.red};
  padding: 0 1.6rem;
  height: 3.6rem;
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 1.6rem;
`;

export default GoToRideButton;
