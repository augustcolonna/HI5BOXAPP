import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function FootballCalendar() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="App">
      <h1>HI5 Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <label style={{ width: "10%", marginRight: "5px" }}>
          Select Sport:
        </label>
        <select
          style={{ width: "20%", marginRight: "10px" }}
          onChange={(event) =>
            setNewEvent({ ...newEvent, title: event.target.value })
          }
        >
          <option value="Football">Ice Hockey</option>
          <option value="Football">Football</option>
        </select>
      </div>
      <DatePicker
        placeholderText="choose date"
        style={{ margin: "10px" }}
        selected={newEvent.start}
        onChange={(start) => setNewEvent({ ...newEvent, start })}
      />
      <DatePicker
        placeholderText="choose end date"
        style={{ marginRight: "10px" }}
        selected={newEvent.end}
        onChange={(end) => setNewEvent({ ...newEvent, end })}
      />

      <button onClick={handleAddEvent}>Add Class to my Schedule</button>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default FootballCalendar;
