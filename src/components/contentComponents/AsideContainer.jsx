import React from 'react'

const AsideContainer = () => {
  return (
    <div className='flex flex-col gap-2 text-center w-full py-4 items-center md:w-[250px]'>
      <p>
        Get customized help with account and arcess your message center
      </p>
      <button
        className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none "
      >
        <span className="inline-flex h-full w-fit cursor-pointer items-center justify-center rounded-full  px-4 py-1 text-sm font-medium backdrop-blur-3xl text-[#012f86] border-2 border-[#012f86]">
          Login
        </span>
      </button>
    </div>
  )
}

export default AsideContainer