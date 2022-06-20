import VoteChip from '@components/chip/VoteChip';
import useCountdown from '@hooks/useCountdown';
import { Vote } from '@_types/vote-type';
import {
  VoteHeaderWrapper,
  VoteEndTimer,
  VoteEndTimerContent,
  VoteEndTimerTitle,
  VoteTag,
  VoteTitle,
} from './VoteHeader.style';

function VoteHeader({ data }: { data: Vote }) {
  const [days, hours, minutes, seconds] = useCountdown(data.votingEndTime);

  return (
    <VoteHeaderWrapper>
      <VoteTag category={data.voteCategory}>
        <VoteChip category={data.voteCategory} />
        {data.tags.reduce((pre, cur) => `${pre + ' #' + cur}`, '')}
      </VoteTag>
      <VoteTitle>{data.title}</VoteTitle>
      <VoteEndTimer>
        {seconds < 0 ? (
          <VoteEndTimerTitle>투표 기한 종료</VoteEndTimerTitle>
        ) : (
          <>
            <VoteEndTimerTitle> 투표 종료까지</VoteEndTimerTitle>
            <VoteEndTimerContent>
              {days}일 {hours}시간 {minutes}분 {seconds}초
            </VoteEndTimerContent>
            남음
          </>
        )}
      </VoteEndTimer>
    </VoteHeaderWrapper>
  );
}

export default VoteHeader;
