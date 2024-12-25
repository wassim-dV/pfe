import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import './Calandra.css'; // ملف CSS مخصص

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

const initialEvents1 = [
  {
    title: 'Team Meeting',
    start: new Date(2024, 11, 10, 9, 0),
    end: new Date(2024, 11, 10, 10, 30),
    allDay: false,
    details: 'Weekly team meeting to discuss project updates.',
  },
  {
    title: 'Code Review',
    start: new Date(2024, 11, 12, 14, 0),
    end: new Date(2024, 11, 12, 15, 30),
    allDay: false,
    details: 'Reviewing pull requests for the main repository.',
  },
  {
    title: 'Workshop: React Basics',
    start: new Date(2024, 11, 15, 10, 0),
    end: new Date(2024, 11, 15, 12, 0),
    allDay: false,
    details: 'Interactive workshop on React fundamentals.',
  },
  // أحداث ثابتة إضافية
  {
    title: 'Business Review',
    start: new Date(2024, 11, 16, 13, 0),
    end: new Date(2024, 11, 16, 14, 30),
    allDay: false,
    details: 'Monthly business review meeting with senior management.',
  },
  {
    title: 'Team Brainstorming',
    start: new Date(2024, 11, 17, 11, 0),
    end: new Date(2024, 11, 17, 12, 0),
    allDay: false,
    details: 'Brainstorming session to discuss new ideas for the project.',
  },
  {
    title: 'Client Presentation',
    start: new Date(2024, 11, 18, 15, 0),
    end: new Date(2024, 11, 18, 16, 30),
    allDay: false,
    details: 'Presenting the final project proposal to the client.',
  },
];

const initialEvents2 = [
  {
    title: 'Client Call',
    start: new Date(2024, 11, 11, 11, 0),
    end: new Date(2024, 11, 11, 12, 0),
    allDay: false,
    details: 'Call with the client to finalize requirements.',
  },
  {
    title: 'Presentation',
    start: new Date(2024, 11, 13, 16, 0),
    end: new Date(2024, 11, 13, 17, 0),
    allDay: false,
    details: 'Presenting the new product roadmap.',
  },
  {
    title: 'Team Lunch',
    start: new Date(2024, 11, 14, 13, 0),
    end: new Date(2024, 11, 14, 14, 30),
    allDay: false,
    details: 'Lunch with the team to discuss future plans.',
  },
  // أحداث ثابتة إضافية
  {
    title: 'Business Review',
    start: new Date(2024, 11, 16, 13, 0),
    end: new Date(2024, 11, 16, 14, 30),
    allDay: false,
    details: 'Monthly business review meeting with senior management.',
  },
  {
    title: 'Team Brainstorming',
    start: new Date(2024, 11, 17, 11, 0),
    end: new Date(2024, 11, 17, 12, 0),
    allDay: false,
    details: 'Brainstorming session to discuss new ideas for the project.',
  },
  {
    title: 'Client Presentation',
    start: new Date(2024, 11, 18, 15, 0),
    end: new Date(2024, 11, 18, 16, 30),
    allDay: false,
    details: 'Presenting the final project proposal to the client.',
  },
];

const Calandra = () => {
  const [currentCalendar, setCurrentCalendar] = useState(1);
  const [calendarEvents1, setCalendarEvents1] = useState(initialEvents1);
  const [calendarEvents2, setCalendarEvents2] = useState(initialEvents2);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // const handleAddEvent = () => {
  //   const title = prompt('Enter the title of the event:');
  //   if (title) {
  //     const start = new Date(prompt('Enter the start date and time (YYYY-MM-DD HH:mm):'));
  //     const end = new Date(prompt('Enter the end date and time (YYYY-MM-DD HH:mm):'));
  //     const details = prompt('Enter details for the event:');
  //     if (start && end) {
  //       if (currentCalendar === 1) {
  //         setCalendarEvents1([
  //           ...calendarEvents1,
  //           { title, start, end, allDay: false, details },
  //         ]);
  //       } else {
  //         setCalendarEvents2([
  //           ...calendarEvents2,
  //           { title, start, end, allDay: false, details },
  //         ]);
  //       }
  //     }
  //   }
  // };

  const onEventDrop = ({ event, start, end }) => {
    if (currentCalendar === 1) {
      const updatedEvents = calendarEvents1.map((evt) =>
        evt === event ? { ...evt, start, end } : evt
      );
      setCalendarEvents1(updatedEvents);
    } else {
      const updatedEvents = calendarEvents2.map((evt) =>
        evt === event ? { ...evt, start, end } : evt
      );
      setCalendarEvents2(updatedEvents);
    }
  };

  const eventStyleGetter = (event) => ({
    style: {
      backgroundColor: currentCalendar === 1 ? '#007bff' : '#ff5733',
      color: 'white',
      borderRadius: '8px',
      border: 'none',
      boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
      padding: '5px',
      transition: 'transform 0.2s ease',
    },
    className: 'event-item',
  });

  const tooltipAccessor = (event) => event.details;

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="listdevux-container">
        <div className="calendar-header">
          <button
            onClick={() => setCurrentCalendar(1)}
            className={currentCalendar === 1 ? 'active' : ''}
          >
            saison 1
          </button>
          <button
            onClick={() => setCurrentCalendar(2)}
            className={currentCalendar === 2 ? 'active' : ''}
          >
                        saison 2
                        
          </button>
        </div>
{/* 
        <button onClick={handleAddEvent} className="add-event-btn">
          + Add Event
        </button> */}

        <div className="calendar-container">
          <DragAndDropCalendar
            localizer={localizer}
            events={currentCalendar === 1 ? calendarEvents1 : calendarEvents2}
            startAccessor="start"
            endAccessor="end"
            tooltipAccessor={tooltipAccessor}
            eventPropGetter={eventStyleGetter}
            onEventDrop={onEventDrop}
            onSelectEvent={handleSelectEvent}
            style={{ height: 500 }}
          />
        </div>

        {selectedEvent && (
          <div className="modal">
            <div className="modal-content">
              <h3>{selectedEvent.title}</h3>
              <p><strong>Details:</strong> {selectedEvent.details}</p>
              <p><strong>Start:</strong> {selectedEvent.start.toString()}</p>
              <p><strong>End:</strong> {selectedEvent.end.toString()}</p>
              <button onClick={handleCloseModal} className="close-modal-btn">Close</button>
            </div>
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default Calandra;
