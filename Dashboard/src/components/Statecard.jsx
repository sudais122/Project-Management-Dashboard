import React from 'react'

const Statecard = ({tittle,count,icon}) => {
  return (
    <>
    <div className="rounded-xl shadow-md p-5 w-full max-w-2xs flex justify-between">
      {/* Title */}

      <div className='flex flex-col'>
      <p className="text-sm font-medium text-gray-500">
        {tittle}
      </p>

      {/* Count */}
      <h2 className="text-3xl font-bold text-gray-900 mt-2">
        {count}
      </h2>
      </div>
               {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 mb-4">
        {icon}
      </div>
    </div>
      </>
  )
}

export default Statecard