import { Vote } from '@_types/vote-type';
import { MouseEventHandler } from 'react';

function ChoiceVote({
  data,
  onOpen,
}: {
  data: Vote;
  onOpen: MouseEventHandler<HTMLButtonElement>;
}) {
  return <div>ChoiceVote</div>;
}

export default ChoiceVote;
