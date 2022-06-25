import VoteBtn from '@components/button/VoteBtn';
import ABVoteItem from '@components/vote/ABVoteItem';
import VoteHeader from '@components/vote/VoteHeader';
import { getToLocaleString } from '@utils/num-util';

import { Vote, VoteItem, VoteResult } from '@_types/vote-type';
import { MouseEventHandler, useEffect, useState } from 'react';
import {
  ABVoteWrapper,
  ABVoteItems,
  ABVoteForm,
  VoteJoinCount,
} from './ABVote.style';

//데이터 있는 경우 mock
/*
const voteResultMock: VoteResult = {
  candidates: [
    {
      id: 1,
      votingCount: 24,
      votingCountRate: 66.6,
      winner: true,
    },
    {
      id: 2,
      votingCount: 12,
      votingCountRate: 33.3,
      winner: false,
    },
  ],
  joinCount: 36,
};
*/
// 데이터 없는 경우 mock
const voteResultMock: VoteResult | undefined = undefined;

function ABVote({
  data,
  onOpen,
}: {
  data: Vote;
  onOpen: MouseEventHandler<HTMLButtonElement>;
}) {
  const [votingId, setVotingId] = useState<number>(-1);
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const getABType = (idx: number) => {
    return idx == 0 ? 'A' : 'B';
  };

  const activeHandler = (id: number) => {
    setVotingId(id);
  };

  return (
    <ABVoteWrapper>
      {!isSSR && (
        <>
          <VoteHeader data={data}></VoteHeader>
          <ABVoteItems>
            {data.candidates.map((item: VoteItem, i) => {
              return (
                <ABVoteItem
                  active={votingId === item.id ? true : false}
                  type={getABType(i)}
                  data={item}
                  key={item.id}
                  onActive={() => activeHandler(item.id)}
                  isEnd={data.topicVoteStatus}
                  result={voteResultMock?.candidates.find(
                    (v) => v.id === item.id,
                  )}
                ></ABVoteItem>
              );
            })}
          </ABVoteItems>
          <ABVoteForm>
            <VoteBtn
              voteStatus={data.topicVoteStatus}
              onOpen={onOpen}
            ></VoteBtn>
            <VoteJoinCount>
              {getToLocaleString(data.joinCount)} 개미 참여 중
            </VoteJoinCount>
          </ABVoteForm>
        </>
      )}
    </ABVoteWrapper>
  );
}

export default ABVote;
