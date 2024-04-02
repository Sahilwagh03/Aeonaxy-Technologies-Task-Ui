import React from 'react'
import Card from '../contentComponents/Card'
import { CardData } from '../../constants/StaticData' 
const InfoCardSection = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center'>
      {
        CardData.map(({title,description,img},index) => (
          <Card key={index} title={title} description={description} img={img} />
        ))
      }
    </div>
  )
}

export default InfoCardSection