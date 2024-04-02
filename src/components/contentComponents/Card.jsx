import React from 'react'

const Card = ({title,description,img,vertical}) => {
    return (
        <div
            className={`rounded-2xl px-5 py-3 max-w-[300px] min-w-[300px] h-auto flex items-center gap-2 ${vertical ? 'flex-col max-w-full': 'flex-row shadow-md'}`}>
            <div>
                <img src={ img ||"/paypalLogo.png"} alt="" width={50} height={20}/>
            </div>
            <div className={vertical ? 'text-center':'text-left'}>
                <h3 className={`text-sm font-semibold ${vertical && 'text-[#2360cf]'}`}>{title}</h3>
                <p className={`text-sm`}>{description}</p>
            </div>
        </div>
    )
}

export default Card