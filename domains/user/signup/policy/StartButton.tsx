import { useRouter } from 'next/router';
import { StartButtonWrapper } from './StartButton.style';

type Props = {
  isAllEssentialChecked: boolean;
};

function StartButton(props: Props) {
  const { isAllEssentialChecked } = props;
  const router = useRouter();

  const onStart = () => {
    isAllEssentialChecked && router.replace('/');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <StartButtonWrapper
        isAllEssentialChecked={isAllEssentialChecked}
        onClick={onStart}
      >
        시작하기
      </StartButtonWrapper>
    </div>
  );
}

export default StartButton;
