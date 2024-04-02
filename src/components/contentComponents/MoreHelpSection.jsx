import React from 'react'
import Card from './Card'
import { MoreHelpCardsData } from '../../constants/StaticData'
const MoreHelpSection = () => {
  return (
    <div className='my-10'>
      <h2 className='text-3xl text-center'>More ways to get help?</h2>
      <div className='flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center mt-6'>
        {
          MoreHelpCardsData.map(({title,description,img},index) => (
            <Card vertical title={title} description={description} key={index} img={img}/>
          ))
        }
      </div>
    </div>
  )
}

export default MoreHelpSection