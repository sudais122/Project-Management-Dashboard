import React from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const isSameDay = (a, b) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

// Builds a flat array of 42 cells (6 weeks) covering the given month,
// padded with the trailing days of the previous month and the leading
// days of the next month so every row is always full.
const buildCalendarCells = (year, month) => {
  const firstOfMonth = new Date(year, month, 1);
  const startWeekday = firstOfMonth.getDay(); // 0 = Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells = [];

  // Trailing days of the previous month
  for (let i = startWeekday - 1; i >= 0; i--) {
    cells.push({
      date: new Date(year, month - 1, daysInPrevMonth - i),
      isCurrentMonth: false,
    });
  }

  // Days of the current month
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push({
      date: new Date(year, month, day),
      isCurrentMonth: true,
    });
  }

  // Leading days of the next month, padded out to a multiple of 7 (6 rows)
  while (cells.length < 42) {
    const nextDay = cells.length - (startWeekday + daysInMonth) + 1;
    cells.push({
      date: new Date(year, month + 1, nextDay),
      isCurrentMonth: false,
    });
  }

  return cells;
};

// viewDate: a Date representing any day in the month to display.
const CalendarGrid = ({ viewDate }) => {
  const today = new Date();
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const cells = buildCalendarCells(year, month);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Week Days */}
      <div className="grid grid-cols-7 border-b border-gray-200">
        {DAYS.map((day) => (
          <div
            key={day}
            className="border-r border-gray-100 px-3 py-3 text-center text-xs font-semibold text-gray-500 last:border-r-0"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7">
        {cells.map(({ date, isCurrentMonth }, index) => {
          const isToday = isSameDay(date, today);

          return (
            <div
              key={index}
              className="min-h-28 border-b border-r border-gray-100 p-3 last:border-r-0"
            >
              <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium ${
                  isToday
                    ? "bg-blue-600 text-white"
                    : isCurrentMonth
                    ? "text-gray-900"
                    : "text-gray-300"
                }`}
              >
                {date.getDate()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;