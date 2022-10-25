import React, { useState } from 'react'
import { Calendar } from 'react-calendar'
import "react-calendar/dist/Calendar.css";


const SampleCal = () => {
  const [value, onChange] = useState(new Date());
  const now = new Date();
  const day = now.getDay();
  const monday = now.getDate() - day + (day == 0 ? -6 : 1);

  const myEvents = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];
  return (
    <div>
      <Calendar
        onChange={onChange}
        data={myEvents}
        value={value} />
      {/* <p>{value.toString()};</p>  */}
    </div>
  )
}

export default SampleCal
