import React, { useState } from 'react';
import { webtoons } from './webtoons.mock';
import {
  WeeklyContainer,
  DaySelectButtonWContainer,
  DaySelectButton,
  WeeklyCardContainer,
  WeeklyCardWrapper,
  WeeklyCard,
  WeeklyCardTitle,
  WeeklyCardAuthor,
} from './Weekly.style';

const days = ['일', '월', '화', '수', '목', '금', '토'];
type Day = typeof days[number];

const today: Day = days[new Date().getDay()];

function Weekly() {
  const [selectedDay, setSelectedDay] = useState<Day>(today);

  const onSelectDay = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedDay(e.currentTarget.textContent as Day);
  };

  return (
    <WeeklyContainer>
      <DaySelectButtonWContainer>
        {days.map((day) => (
          <DaySelectButton
            key={day}
            selected={day === selectedDay}
            onClick={onSelectDay}
          >
            {day}
          </DaySelectButton>
        ))}
      </DaySelectButtonWContainer>
      <WeeklyCardContainer>
        {webtoons.map((webtoon) => (
          <WeeklyCardWrapper key={webtoon.id} href={`/webtoon/${webtoon.id}`}>
            <WeeklyCard
              alt={webtoon.title}
              src={webtoon.imageUrl}
              width={92}
              height={92}
              layout="fixed"
            />
            <WeeklyCardTitle>{webtoon.title}</WeeklyCardTitle>
            <WeeklyCardAuthor>{webtoon.author}</WeeklyCardAuthor>
          </WeeklyCardWrapper>
        ))}
      </WeeklyCardContainer>
    </WeeklyContainer>
  );
}

export default Weekly;
