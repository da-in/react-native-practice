import {format} from 'date-fns';
import React, {useContext, useState} from 'react';
import CalendarView from '../components/CalendarView';
import LogContext from '../contexts/LogContext';

function CalendarScreen() {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const markedDates = logs.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});
  return (
    <CalendarView
      markedDates={markedDates}
      selectedDate={selectedDate}
      onSelectDate={setSelectedDate}
    />
  );
}

export default CalendarScreen;
