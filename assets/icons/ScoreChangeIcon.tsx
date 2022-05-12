import { memo } from 'react';
import themes from '@styles/themes/themes';

type RankingStatus = 'up' | 'down' | 'stable';

const ScoreChangeIcon = (props: { rankingStatus: RankingStatus }) => {
  const { rankingStatus } = props;

  const status = {
    color: themes.colors.grayscale.gray_700,
    display: 'inline',
    transform: '',
  };

  switch (rankingStatus) {
    case 'up':
      status.color = themes.colors.secondary.red;
      status.transform = 'rotate(180)';
      break;
    case 'down':
      status.color = themes.colors.secondary.blue;
      break;
    case 'stable':
    default:
      status.display = 'none';
  }

  return (
    <svg
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      display={status.display}
      transform={status.transform}
    >
      <path d="M0 0.098877L2 3.16797L4 0.0988777" fill={status.color} />
    </svg>
  );
};

export default memo(ScoreChangeIcon);
