import React from 'react'
import AsideContainer from './AsideContainer'
import QuestionContainer from '../contentComponents/QuestionContainer'
import SideBar from '../contentComponents/SideBar'
const PersonalHelpSection = () => {
    return (
        <div className='flex flex-col gap-4 mt-6 md:flex-row'>
            {/* SideBar */}
            <SideBar />

            {/* QuestionContainer */}
            <QuestionContainer />

            {/* AsideContainer */}
            <AsideContainer />
        </div>
    )
}

export default PersonalHelpSection