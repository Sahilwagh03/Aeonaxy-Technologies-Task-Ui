import React from 'react'

const SurveySection = () => {
    return (
        <div className='flex flex-col items-center w-fit gap-4 md:flex-row'>
            <div className='flex flex-col gap-4 text-center '>
                <h2 className='md:text-left text-2xl'>How are we doing?</h2>
                <p>Help improve the <b>PayPal Help Center experience </b>with some quick feedback</p>
            </div>
            <div>
                <button
                    className="relative  h-10 overflow-hidden rounded-full p-[2px] focus:outline-none min-w-[84px] inline-flex"
                >
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl bg-[#012f86]">
                        Take the survey
                    </span>
                </button>
            </div>
        </div>
    )
}

export default SurveySection