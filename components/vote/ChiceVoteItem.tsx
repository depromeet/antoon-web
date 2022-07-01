import { CheckRightIcon } from '@assets/icons/CheckIcon';
import { VoteItem, VoteResultItem } from '@_types/vote-type';
import { MouseEventHandler } from 'react';

import {
  ChoiceVoteItemWrapper,
  ChoiceVoteContentWrapper,
  ChoiceVoteContent,
  ChoiceVoteType,
  ChoiceVoteFilter,
  ChoiceVoteResultPercent,
  ChoiceVoteResultVoter,
  ChoiceWinnerType,
  ChoiceVoteResult,
} from './ChoiceVoteItem.style';

interface Props {
  type: string;
  data: VoteItem;
  active: boolean;
  onActive: MouseEventHandler<HTMLElement>;
  isEnd: boolean;
  result?: VoteResultItem;
}

function ChoiceVoteItem(props: Props) {
  const { type, active, onActive, data, isEnd, result } = props;

  const isWinner = () => {
    return (result?.winner && isEnd) || false;
  };

  return (
    <ChoiceVoteItemWrapper onClick={onActive}>
      {isEnd && result ? (
        <>
          <ChoiceVoteFilter
            isEnd={isEnd}
            isWinner={isWinner()}
            dataWidth={result.votingCountRate}
          />
          <ChoiceVoteResult isEnd={isEnd}>
            <ChoiceVoteResultPercent isWinner={isWinner()}>
              {result.votingCountRate}%
            </ChoiceVoteResultPercent>
            <ChoiceVoteResultVoter>
              {result.votingCount} 개미
            </ChoiceVoteResultVoter>
          </ChoiceVoteResult>
        </>
      ) : (
        active && (
          <>
            <ChoiceVoteFilter isEnd={isEnd} isWinner={false} dataWidth={100} />
            <CheckRightIcon />
          </>
        )
      )}
      <ChoiceVoteContentWrapper isEnd={isEnd}>
        {isWinner() ? (
          <ChoiceWinnerType>✓</ChoiceWinnerType>
        ) : (
          <ChoiceVoteType>{type}</ChoiceVoteType>
        )}
        <ChoiceVoteContent>{data?.content}</ChoiceVoteContent>
      </ChoiceVoteContentWrapper>
    </ChoiceVoteItemWrapper>
  );
}

export default ChoiceVoteItem;
