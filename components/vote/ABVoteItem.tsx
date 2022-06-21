import { CheckIcon } from '@assets/icons/CheckIcon';
import { VoteItem } from '@_types/vote-type';
import { MouseEventHandler } from 'react';

import {
  ABVoteItemWrapper,
  ABVoteImg,
  ABVoteContentWrapper,
  ABVoteContent,
  ABVoteType,
  ABVoteFilter,
} from './ABVoteItem.style';

interface Props {
  type: 'A' | 'B';
  data: VoteItem;
  active: boolean;
  onActive: MouseEventHandler<HTMLElement>;
}

function ABVoteItem(props: Props) {
  const { type, active, onActive, data } = props;

  return (
    <ABVoteItemWrapper onClick={onActive}>
      {active ? (
        <>
          <ABVoteFilter /> <CheckIcon />
        </>
      ) : (
        ''
      )}
      <ABVoteImg imageSrc={data.imageUrl}></ABVoteImg>
      <ABVoteContentWrapper>
        <ABVoteType>{type}</ABVoteType>
        <ABVoteContent>{data.content}</ABVoteContent>
      </ABVoteContentWrapper>
    </ABVoteItemWrapper>
  );
}

export default ABVoteItem;
