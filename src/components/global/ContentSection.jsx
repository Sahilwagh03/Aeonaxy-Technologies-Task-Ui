import React, { useState } from 'react'
import SearchSection from '../contentComponents/SearchSection'
import Alert from '../../components-react-nex/Alert/Alert'
import InfoCardSection from '../../components/global/InfoCard'
import QuestionSection from './QuestionSection'
import MoreHelpSection from '../contentComponents/MoreHelpSection'
import SurveySection from '../contentComponents/SurveySection'

const ContentSection = () => {
    const [warningShow, setWarning] = useState(true)
    return (
        <section className='h-auto px-2 md:px-5 lg:px-32 py-3 flex flex-col items-center'>
            <SearchSection />
            {warningShow &&
                <Alert message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia consequatur eligendi quae incidunt qui ducimus, modi ratione. Amet perspiciatis, libero fugiat voluptatem doloremque, quis quae ipsa impedit quas consequuntur'}
                    type='info'
                    alertContainerStyle='my-2 bg-yellow-100 text-black '
                    color={'#FFA500'}
                    onClick={() => setWarning(false)}
                />
            }
            <InfoCardSection />
            <QuestionSection />
            <MoreHelpSection/>
            <SurveySection />
        </section>
    )
}

export default ContentSection
