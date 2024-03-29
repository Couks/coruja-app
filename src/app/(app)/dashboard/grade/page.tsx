"use client";

import React, { useState } from "react";

const daysOfWeek = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const hoursOfDay = [
  "07:10 - 08:00",
  "08:00 - 08:50",
  "08:50 - 09:40",
  "09:50 - 10:40",
  "10:40 - 11:30",
  "11:30 - 12:20",
  "13:00 - 13:50",
  "13:50 - 14:40",
  "14:40 - 15:30",
  "15:30 - 16:20",
  "16:20 - 17:10",
  "17:10 - 18:00",
  "18:00 - 18:40",
  "18:40 - 19:20",
  "19:20 - 20:00",
  "20:00 - 20:40",
  "20:50 - 21:30",
  "21:30 - 22:10",
];

const ScheduleComponent = () => {
  const [schedule, setSchedule] = useState(
    Array.from({ length: daysOfWeek.length }, () =>
      Array.from({ length: hoursOfDay.length }, () => ""),
    ),
  );

  const handleScheduleChange = (dayIndex: any, hourIndex: any, event: any) => {
    const newSchedule = [...schedule];
    newSchedule[dayIndex][hourIndex] = event.target.value;
    setSchedule(newSchedule);
  };

  const addToGoogleCalendar = () => {
    // Aqui você adicionaria a lógica para integrar com o Google Agenda
    console.log("Integrar com Google Agenda:", schedule);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-6 gap-2">
        <div className="col-span-1"></div>
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="col-span-1 border border-gray-300 p-2 text-center"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-6 gap-2">
        {hoursOfDay.map((hour, hourIndex) => (
          <React.Fragment key={hourIndex}>
            <div className="col-span-1 border border-gray-300 p-2 text-center">
              {hour}
            </div>
            {daysOfWeek.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="col-span-1 border border-gray-300 p-2"
              >
                <input
                  type="text"
                  className="w-full border-b-2 border-slate-900 outline-none"
                  value={schedule[dayIndex][hourIndex]}
                  onChange={(event) =>
                    handleScheduleChange(dayIndex, hourIndex, event)
                  }
                  placeholder="Evento"
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={addToGoogleCalendar}
        >
          Adicionar ao Google Agenda
        </button>
      </div>
    </div>
  );
};

export default ScheduleComponent;
