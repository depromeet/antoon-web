import styled from '@emotion/styled';
import Image from 'next/image';

const WeeklyContainer = styled.div`
  padding-bottom: 6rem;
`;

const DaySelectButtonWContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

type DaySelectButtonProps = {
  selected: boolean;
};

const DaySelectButton = styled.button<DaySelectButtonProps>`
  transition: all 300ms ease-in-out;
  border-radius: 24px;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.grayscale.gray_800 : 'unset'};
  min-width: 32px;
  min-height: 32px;
  color: ${(props) =>
    props.selected ? 'white' : props.theme.colors.grayscale.gray_700};
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      background-color: ${(props) => props.theme.colors.grayscale.gray_600};
      color: white;
    }
  }
`;

const WeeklyCardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.4rem;
  justify-content: center;
`;

const SkeleteonWrapper = styled.div`
  display: grid;
  gap: 0.2rem;
  z-index: 0;
  padding: 0.4rem;
  width: 10rem;
`;

const WeeklyCardWrapper = styled.a`
  border-radius: 1.2rem;
  padding: 0.4rem;
  width: 10rem;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      background-color: ${(props) => props.theme.colors.primary.gray_200};
    }
  }
`;

const WeeklyCard = styled(Image)`
  border-radius: 16px;
`;

const WeeklyCardTitle = styled.div`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.grayscale.gray_900};
  font-size: 1.4rem;
  font-weight: 600;
`;

const WeeklyCardAuthor = styled.div`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #939393;
  font-size: 1.2rem;
`;

export {
  WeeklyContainer,
  DaySelectButtonWContainer,
  DaySelectButton,
  WeeklyCardContainer,
  SkeleteonWrapper,
  WeeklyCardWrapper,
  WeeklyCard,
  WeeklyCardTitle,
  WeeklyCardAuthor,
};
