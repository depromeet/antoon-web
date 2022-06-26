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

function ABVote({
  data,
  onOpen,
  onSelect,
}: {
  data: Vote;
  onOpen: MouseEventHandler<HTMLButtonElement>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSelect: Function;
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
    onSelect(id);
  };

  return (
    <ABVoteWrapper>
      {!isSSR && (
        <>
          <VoteHeader data={data}></VoteHeader>
          <ABVoteItems>
            {data?.candidates.map((item: VoteItem, i) => {
              return (
                <ABVoteItem
                  active={votingId === item.id ? true : false}
                  type={getABType(i)}
                  data={item}
                  key={item.id}
                  onActive={() => activeHandler(item.id)}
                  isEnd={data.topicVoteStatus}
                  result={data?.candidates.find((v) => v.id === item.id)}
                ></ABVoteItem>
              );
            })}
          </ABVoteItems>
          <ABVoteForm>
            <VoteBtn voteStatus={data.topicVoteStatus} onOpen={onOpen} />
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
