import { useToast } from '@hooks/useToast';
import { MouseEventHandler } from 'react';
import { VoteBtnWrapper } from './VoteBtn.style';

function VoteBtn({
  voteStatus,
  onOpen,
}: {
  voteStatus: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onOpen: Function;
}) {
  const { fireToast } = useToast();
  const onVoted = () => {
    fireToast({ joinLeaveStatus: 'VOTED' });
  };

  const modalOpen = () => {
    onOpen();
  };

  return (
    <VoteBtnWrapper
      onClick={!voteStatus ? modalOpen : onVoted}
      voteStatus={voteStatus}
    >
      {voteStatus ? '투표완료' : '투표하기'}
    </VoteBtnWrapper>
  );
}

export default VoteBtn;
