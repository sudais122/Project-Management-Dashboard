import React from 'react'
import { FaPlus } from "react-icons/fa6";

const CreateProject = () => {
  return (
    <>
    <div  className='flex items-center py-2 justify-center gap-2 rounded-lg border border-gray-200 bg-blue-600 px-4 font-semibold text-white hover:bg-blue-700 transition duration-200 cursor-pointer'>
        <FaPlus />
        <p>New Project</p>
    </div>
    </>
  )
}

export default CreateProject