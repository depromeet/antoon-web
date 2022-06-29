import { useGetTopicsById } from '@apis/topics';
import ErrorBoundary from '@components/ErrorBoundary';
import Modal from '@components/modal/vote/Modal';
import OnError from '@components/OnError';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import { useEffect, useState } from 'react';
import ABVote from './ABVote';
import ChoiceVote from './ChoiceVote';
import { VoteDetailWrapper } from './VoteDetail.style';

function VoteDetail({ id }: { id: number }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetTopicsById(id);
  const [candidateId, setCandidateId] = useState(-1);

  if (isLoading) {
    return <LoadingSpinner />;
  } else if (!data)
    return <OnError>투표정보를 불러오지 못하고 있어요😭😭😭</OnError>;

  return (
    <ErrorBoundary message="투표정보를 불러오지 못하고 있어요 😭😭😭">
      <VoteDetailWrapper>
        {data?.topicCategory === 'AB' ? (
          <ABVote
            data={data}
            onOpen={() => setIsModalOpen(true)}
            onSelect={setCandidateId}
          />
        ) : (
          <ChoiceVote
            data={data}
            onOpen={() => setIsModalOpen(true)}
            onSelect={setCandidateId}
          />
        )}
        <Modal
          topicId={data?.topicId}
          candidateId={candidateId}
          isOpen={isModalOpen}
          onClose={setIsModalOpen}
        />
      </VoteDetailWrapper>
    </ErrorBoundary>
  );
}

export default VoteDetail;
