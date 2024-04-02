import React, { useState } from 'react'
import { TabBar } from '../contentComponents/TabBar'
import PersonalHelpSection from '../contentComponents/PersonalHelpSection';

const QuestionSection = () => {
  const [activeTab, setActiveTab] = useState('Personal Help');
  return (
    <div>
      {/* Tabs */}
      <div className='flex justify-center mt-4'>
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div>
        {activeTab === 'Personal Help' && <PersonalHelpSection/>}
        {activeTab === 'Business Help' && <p>Business Help Content Here</p>}
        {activeTab === 'Technical Help' && <p>Technical Help Content Here</p>}
      </div>
    </div>
  )
}

export default QuestionSection