import VoteBtn from '@components/button/VoteBtn';
import ABVoteItem from '@components/vote/ABVoteItem';
import VoteHeader from '@components/vote/VoteHeader';
import { getToLocaleString } from '@utils/num-util';

import { Vote, VoteItem } from '@_types/vote-type';
import { MouseEventHandler, useEffect, useState } from 'react';
import {
  ABVoteWrapper,
  ABVoteItems,
  ABVoteForm,
  VoteJoinCount,
} from './ABVote.style';

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
            {data.voteItems.map((item: VoteItem, i) => {
              return (
                <ABVoteItem
                  active={votingId === item.id ? true : false}
                  type={getABType(i)}
                  data={item}
                  key={item.id}
                  onActive={() => activeHandler(item.id)}
                ></ABVoteItem>
              );
            })}
          </ABVoteItems>
          <ABVoteForm>
            <VoteBtn voteStatus={data.voteStatus} onOpen={onOpen}></VoteBtn>
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
