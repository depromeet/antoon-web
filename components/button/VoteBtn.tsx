import { MouseEventHandler } from 'react';
import { VoteBtnWrapper } from './VoteBtn.style';

function VoteBtn({
  voteStatus,
  onOpen,
}: {
  voteStatus: boolean;
  onOpen: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <VoteBtnWrapper
      onClick={!voteStatus ? onOpen : undefined}
      voteStatus={voteStatus}
    >
      {voteStatus ? '투표완료' : '투표하기'}
    </VoteBtnWrapper>
  );
}

export default VoteBtn;
