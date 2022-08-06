import styled from '@emotion/styled';

const TopicCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  margin-right: 2.4rem;
`;

const TopicCardsWrapper = styled.section<{ bgColor: string }>`
  border-radius: 1.6rem;
  background-color: ${(props) => props.bgColor};
  padding: 2rem;
  min-width: 24rem;
  height: 12.4rem;
  color: ${(props) => props.theme.colors.basic.white};

  &:hover {
    transition-duration: 200ms;
    transition-property: background-color, color;
    transition-timing-function: ease;
    opacity: 0.8;
  }
`;

const TopicCardHashtag = styled.div`
  padding-bottom: 0.4rem;
  font-weight: 500;
`;

const TopicCardTitle = styled.div`
  margin-bottom: 1.6rem;
  height: 4rem;
  line-height: 1.4;
  font-size: 1.4rem;
  font-weight: bold;
`;

const TopicCardJoinedCounts = styled.div`
  opacity: 0.7;
`;

export {
  TopicCardContainer,
  TopicCardsWrapper,
  TopicCardHashtag,
  TopicCardTitle,
  TopicCardJoinedCounts,
};
