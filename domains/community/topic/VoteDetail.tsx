import ErrorBoundary from '@components/ErrorBoundary';
import Modal from '@components/modal/vote/Modal';
import { Vote, VoteResult } from '@_types/vote-type';
import { useState } from 'react';
import ABVote from './ABVote';
import ChoiceVote from './ChoiceVote';
import { VoteDetailWrapper } from './VoteDetail.style';

function VoteDetail({ id }: { id: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const { data, isLoading } = useGetVoteById(id);
  const data: Vote = {
    voteId: 1,
    voteCategory: 'AB',
    title: '주영, 자림 커플은 이대로 헤어질까? 그러면 어떻게 되징 2줄',
    tags: ['연애혁명', '소녀심판'],
    votingEndTime: '2022-06-30T14:00:45',
    voteItems: [
      {
        id: 1,
        content: '무조건 이 경우가 이긴다.',
        imageUrl:
          'https://blog.kakaocdn.net/dn/bSAMGD/btqGbrklfgR/vuBgYTfwQP0Cq2ZW0G3ZXK/img.png',
      },
      {
        id: 2,
        content: '무조건 이 경우가 이긴다2.',
        imageUrl:
          'https://blog.kakaocdn.net/dn/bSAMGD/btqGbrklfgR/vuBgYTfwQP0Cq2ZW0G3ZXK/img.png',
      },
      /* 초이스
      {
        id: 3,
        content: '무조건 이 경우가 이긴다3.',
        imageUrl:
          'https://blog.kakaocdn.net/dn/bSAMGD/btqGbrklfgR/vuBgYTfwQP0Cq2ZW0G3ZXK/img.png',
      },
      */
    ],
    joinCount: 12345,
    voteStatus: true,
  };

  return (
    <ErrorBoundary message="투표정보를 불러오지 못하고 있어요 😭😭😭">
      <VoteDetailWrapper>
        {data.voteCategory === 'AB' ? (
          <ABVote data={data} onOpen={() => setIsModalOpen(true)} />
        ) : (
          <ChoiceVote data={data} onOpen={() => setIsModalOpen(true)} />
        )}
        <Modal
          voteId={data.voteId}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </VoteDetailWrapper>
    </ErrorBoundary>
  );
}

export default VoteDetail;
