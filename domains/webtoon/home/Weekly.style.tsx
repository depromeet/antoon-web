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
    props.selected ? props.theme.colors.grey_900 : 'unset'};
  min-width: 32px;
  min-height: 32px;
  color: ${(props) => (props.selected ? 'white' : props.theme.colors.grey_600)};
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      background-color: ${(props) => props.theme.colors.grey_400};
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

const WeeklyCardWrapper = styled.a`
  border-radius: 12px;
  padding: 0.4rem;
  width: 100px;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      background-color: ${(props) => props.theme.colors.grey_260};
    }
  }
`;

const WeeklyCard = styled(Image)`
  margin-bottom: 0.8rem;
  border-radius: 16px;
  background-color: ${(props) => props.theme.bg_color.primary};
  width: 100%;
  height: 98px;
`;

const WeeklyCardTitle = styled.div`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.grey_90};
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
  WeeklyCardWrapper,
  WeeklyCard,
  WeeklyCardTitle,
  WeeklyCardAuthor,
};
