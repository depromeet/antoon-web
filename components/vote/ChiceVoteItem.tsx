import { CheckRightIcon } from '@assets/icons/CheckIcon';
import { VoteItem } from '@_types/vote-type';
import { MouseEventHandler } from 'react';

import {
  ChoiceVoteItemWrapper,
  ChoiceVoteContentWrapper,
  ChoiceVoteContent,
  ChoiceVoteType,
  ChoiceVoteFilter,
} from './ChoiceVoteItem.style';

interface Props {
  type: string;
  data: VoteItem;
  active: boolean;
  onActive: MouseEventHandler<HTMLElement>;
}

function ChoiceVoteItem(props: Props) {
  const { type, active, onActive, data } = props;

  return (
    <ChoiceVoteItemWrapper onClick={onActive}>
      {active ? (
        <>
          <ChoiceVoteFilter /> <CheckRightIcon />
        </>
      ) : (
        ''
      )}
      <ChoiceVoteContentWrapper>
        <ChoiceVoteType>{type}</ChoiceVoteType>
        <ChoiceVoteContent>{data.content}</ChoiceVoteContent>
      </ChoiceVoteContentWrapper>
    </ChoiceVoteItemWrapper>
  );
}

export default ChoiceVoteItem;
