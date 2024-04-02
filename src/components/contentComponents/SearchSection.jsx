import React from 'react'
import { RiSearchLine } from 'react-icons/ri';
const SearchSection = () => {
    return (
        <div className='w-full'>
            <p className='text-[#012f86]'>Help Center</p>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-2xl text-center mt-3 md:mt-0'>How can we help?</h1>
                <label className={`relative block w-full md:w-[500px]`}>
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <RiSearchLine size={20} className='fill-black' />
                    </span>
                    <input
                        className={`w-full bg-white placeholder:font-italitc border border-slate-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-1 dark:border-2 `}
                        placeholder="Search by keyword" type="text" />
                </label>
            </div>
        </div>
    )
}

export default SearchSection