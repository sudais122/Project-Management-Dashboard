import React, { useState } from 'react'
import Header from '../components/Calendar/Header'
import TopBar from '../components/Calendar/TopBar'
import CalendarGrid from '../components/Calendar/Calender'

export const Calender = () => {
  const today = new Date()
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1))

  const goToPrevMonth = () =>
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))

  const goToNextMonth = () =>
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))

  const goToToday = () =>
    setViewDate(new Date(today.getFullYear(), today.getMonth(), 1))

  return (
    <>
      <Header />
      <TopBar
        viewDate={viewDate}
        onToday={goToToday}
        onPrevMonth={goToPrevMonth}
        onNextMonth={goToNextMonth}
      />
      <div className='w-full h-full px-5 py-8'>
        <CalendarGrid viewDate={viewDate} />
      </div>
    </>
  )
}