import themes from '@styles/themes/themes';
import { VoteType } from '@_types/vote-type';
import { VoteChipContent, VoteChipWrapper } from './VoteChip.style';

function VoteChip({ category }: { category: VoteType }) {
  const backgroundColor =
    category === 'ab'
      ? themes.colors.chart.point_up_100
      : themes.colors.chart.point_down_100;

  const getContent = category === 'ab' ? 'A/B' : '초이스';
  return (
    <VoteChipWrapper color={backgroundColor}>
      <VoteChipContent>{getContent}</VoteChipContent>
    </VoteChipWrapper>
  );
}

export default VoteChip;
