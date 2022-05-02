import styled from '@emotion/styled';

const WeeklyWrapper = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2rem;
  padding-bottom: 2rem;
  width: 100%;
`;

const CarouselBox = styled.div`
  flex: 0 0 33%;
  border-radius: 16px;
  background-color: ${(props) => props.theme.bg_color.primary};
  width: 98px;
  height: 98px;
`;

const DaySelectButtonWContainer = styled.div`
  display: flex;
  gap: 3.2rem;
`;

type DaySelectButtonProps = {
  selected: boolean;
};

const DaySelectButton = styled.button<DaySelectButtonProps>`
  border-radius: 24px;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.grey_900 : 'none'};
  width: 32px;
  height: 32px;
  color: ${(props) => (props.selected ? 'white' : props.theme.colors.grey_600)};
`;

export {
  WeeklyWrapper,
  CarouselBox,
  DaySelectButtonWContainer,
  DaySelectButton,
};
