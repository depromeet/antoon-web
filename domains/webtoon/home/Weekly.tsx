import React, { useState } from 'react';
import {
  WeeklyWrapper,
  CarouselBox,
  DaySelectButtonWContainer,
  DaySelectButton,
} from './Weekly.style';

const days = ['일', '월', '화', '수', '목', '금', '토'];
type Day = typeof days[number];

const today: Day = days[new Date().getDay()] as Day;

function Weekly() {
  const [selectedDay, setSelectedDay] = useState<Day>(today);

  const onSelectDay = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedDay(e.currentTarget.textContent as Day);
  };

  return (
    <WeeklyWrapper>
      <DaySelectButtonWContainer>
        <DaySelectButton selected={'월' === selectedDay} onClick={onSelectDay}>
          월
        </DaySelectButton>
        <DaySelectButton selected={'화' === selectedDay} onClick={onSelectDay}>
          화
        </DaySelectButton>
        <DaySelectButton selected={'수' === selectedDay} onClick={onSelectDay}>
          수
        </DaySelectButton>
        <DaySelectButton selected={'목' === selectedDay} onClick={onSelectDay}>
          목
        </DaySelectButton>
        <DaySelectButton selected={'금' === selectedDay} onClick={onSelectDay}>
          금
        </DaySelectButton>
        <DaySelectButton selected={'토' === selectedDay} onClick={onSelectDay}>
          토
        </DaySelectButton>
        <DaySelectButton selected={'일' === selectedDay} onClick={onSelectDay}>
          일
        </DaySelectButton>
      </DaySelectButtonWContainer>
      {/* <CarouselBox />
      <CarouselBox />
      <CarouselBox />
      <CarouselBox />
      <CarouselBox /> */}
    </WeeklyWrapper>
  );
}

export default Weekly;
