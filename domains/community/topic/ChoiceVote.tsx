import VoteBtn from '@components/button/VoteBtn';
import ChoiceVoteItem from '@components/vote/ChiceVoteItem';
import VoteHeader from '@components/vote/VoteHeader';
import { getToLocaleString } from '@utils/num-util';
import { Vote, VoteItem, VoteResult } from '@_types/vote-type';
import { MouseEventHandler, useEffect, useState } from 'react';
import {
  ChoiceVoteForm,
  ChoiceVoteItems,
  ChoiceVoteWrapper,
  VoteJoinCount,
} from './ChoiceVote.style';

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
      votingCountRate: 22.2,
      winner: false,
    },
    {
      id: 3,
      votingCount: 6,
      votingCountRate: 11.2,
      winner: false,
    },
  ],
  joinCount: 36,
};
*/
// 데이터 없는 경우 mock
const voteResultMock: VoteResult | undefined = undefined;

function ChoiceVote({
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

  const getASCIIChar = (idx: number) => {
    return String.fromCharCode(65 + idx);
  };

  const activeHandler = (id: number) => {
    setVotingId(id);
  };

  return (
    <ChoiceVoteWrapper>
      {!isSSR && (
        <>
          <VoteHeader data={data}></VoteHeader>
          <ChoiceVoteItems>
            {data.candidates.map((item: VoteItem, i) => {
              return (
                <ChoiceVoteItem
                  active={votingId === item.id ? true : false}
                  type={getASCIIChar(i)}
                  data={item}
                  key={item.id}
                  onActive={() => activeHandler(item.id)}
                  isEnd={data.topicVoteStatus}
                  result={voteResultMock?.candidates.find(
                    (v) => v.id === item.id,
                  )}
                ></ChoiceVoteItem>
              );
            })}
          </ChoiceVoteItems>
          <ChoiceVoteForm>
            <VoteBtn
              voteStatus={data.topicVoteStatus}
              onOpen={onOpen}
            ></VoteBtn>
            <VoteJoinCount>
              {getToLocaleString(data.joinCount)} 개미 참여 중
            </VoteJoinCount>
          </ChoiceVoteForm>
        </>
      )}
    </ChoiceVoteWrapper>
  );
}

export default ChoiceVote;
