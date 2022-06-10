import { useState } from 'react';
import {
  WeeklyContainer,
  DaySelectButtonWContainer,
  DaySelectButton,
} from './Weekly.style';
import WeeklyWebtoons from './WeeklyWebtoons';
import { Day } from '@_types/webtoon-type';

const displayDays = ['월', '화', '수', '목', '금', '토', '일'];
const days = ['일', '월', '화', '수', '목', '금', '토'];
const today = days[new Date().getDay()] as Day;

function Weekly() {
  const [selectedDay, setSelectedDay] = useState<Day>(today);

  const onSelectDay = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedDay(e.currentTarget.textContent as Day);
  };

  return (
    <WeeklyContainer>
      <DaySelectButtonWContainer>
        {displayDays.map((day) => (
          <DaySelectButton
            key={day}
            selected={day === selectedDay}
            onClick={onSelectDay}
          >
            {day}
          </DaySelectButton>
        ))}
      </DaySelectButtonWContainer>
      <WeeklyWebtoons selectedDay={selectedDay} />
    </WeeklyContainer>
  );
}

export default Weekly;
