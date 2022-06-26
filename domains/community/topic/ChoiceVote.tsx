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

function ChoiceVote({
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

  const getASCIIChar = (idx: number) => {
    return String.fromCharCode(65 + idx);
  };

  const activeHandler = (id: number) => {
    setVotingId(id);
    onSelect(id);
  };

  return (
    <ChoiceVoteWrapper>
      {!isSSR && (
        <>
          <VoteHeader data={data}></VoteHeader>
          <ChoiceVoteItems>
            {data?.candidates.map((item: VoteItem, i) => {
              return (
                <ChoiceVoteItem
                  active={votingId === item.id ? true : false}
                  type={getASCIIChar(i)}
                  data={item}
                  key={item.id}
                  onActive={() => activeHandler(item.id)}
                  isEnd={data.topicVoteStatus}
                  result={data?.candidates.find((v) => v.id === item.id)}
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
