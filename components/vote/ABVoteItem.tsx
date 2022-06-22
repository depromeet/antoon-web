import { CrownIcon } from '@assets/icons';
import { CheckIcon } from '@assets/icons/CheckIcon';
import { VoteItem, VoteResultItem } from '@_types/vote-type';
import { MouseEventHandler } from 'react';

import {
  ABVoteItemWrapper,
  ABVoteImg,
  ABVoteContentWrapper,
  ABVoteContent,
  ABVoteType,
  ABVoteFilter,
  ABWinnerType,
  ABVoteResult,
  ABVoteResultPercent,
  ABVoteResultVoter,
  ABVoteWinnerMark,
} from './ABVoteItem.style';

interface Props {
  type: 'A' | 'B';
  data: VoteItem;
  active: boolean;
  onActive: MouseEventHandler<HTMLElement>;
  isEnd: boolean;
  result?: VoteResultItem;
}

function ABVoteItem(props: Props) {
  const { type, active, onActive, data, isEnd, result } = props;

  const isWinner = () => {
    return result?.winner || false;
  };

  return (
    <ABVoteItemWrapper onClick={onActive} isWinner={isWinner()}>
      {isEnd && result ? (
        <>
          <ABVoteFilter
            isEnd={isEnd}
            isWinner={isWinner()}
            dataWidth={result.voteRate}
          />
          <ABVoteResult isEnd={isEnd}>
            {isWinner() && (
              <ABVoteWinnerMark>
                <CrownIcon />
              </ABVoteWinnerMark>
            )}
            <ABVoteResultPercent isWinner={isWinner()}>
              {result.voteRate}%
            </ABVoteResultPercent>
            <ABVoteResultVoter>{result.voteCount} 개미</ABVoteResultVoter>
          </ABVoteResult>
        </>
      ) : (
        active && (
          <>
            <ABVoteFilter isEnd={isEnd} isWinner={false} dataWidth={100} />{' '}
            <CheckIcon />
          </>
        )
      )}
      <ABVoteImg imageSrc={data.imageUrl}></ABVoteImg>
      <ABVoteContentWrapper isEnd={isEnd} isWinner={isWinner()}>
        {isWinner() ? (
          <ABWinnerType>✓</ABWinnerType>
        ) : (
          <ABVoteType>{type}</ABVoteType>
        )}
        <ABVoteContent>{data.content}</ABVoteContent>
      </ABVoteContentWrapper>
    </ABVoteItemWrapper>
  );
}

export default ABVoteItem;
