import styled from '@emotion/styled';

const AllTopicCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.6rem;
`;

const AllTopicCardWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  height: 7.2rem;
`;

const AllTopicCardImageContainer = styled.div`
  min-width: 7.2rem;
  min-height: 7.2rem;
`;

const AllTopicCardSecondImage = styled.div`
  position: relative;
  bottom: 2.2rem;
  left: 2.6rem;
  border: solid ${(props) => props.theme.colors.basic.white};
  border-radius: 10rem;
  width: fit-content;
`;

const AllTopicCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const AllTopicCardTitle = styled.div`
  height: 4rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const AllTopicJoinCount = styled.div`
  color: ${(props) => props.theme.colors.grayscale.gray_600};
  font-weight: 500;
`;

export {
  AllTopicCardContainer,
  AllTopicCardWrapper,
  AllTopicCardImageContainer,
  AllTopicCardSecondImage,
  AllTopicCardContentContainer,
  AllTopicCardTitle,
  AllTopicJoinCount,
};
