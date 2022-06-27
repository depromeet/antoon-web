import { useToast } from '@hooks/useToast';
import { MouseEventHandler } from 'react';
import { VoteBtnWrapper } from './VoteBtn.style';

function VoteBtn({
  voteStatus,
  onOpen,
}: {
  voteStatus: boolean;
  onOpen: MouseEventHandler<HTMLButtonElement>;
}) {
  const { fireToast } = useToast();
  const onVoted = () => {
    fireToast({ joinLeaveStatus: 'VOTED' });
  };
  return (
    <VoteBtnWrapper
      onClick={!voteStatus ? onOpen : onVoted}
      voteStatus={voteStatus}
    >
      {voteStatus ? '투표완료' : '투표하기'}
    </VoteBtnWrapper>
  );
}

export default VoteBtn;
