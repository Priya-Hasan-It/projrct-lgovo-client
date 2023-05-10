import React from 'react'

const Restaurant = ({restaurant}) => {
    console.log(restaurant);

    const {img, title} = restaurant;

  return (
    <div className=''>
        <div className=''> 
            <div className=''>
            <img src={img} alt="" className='rounded-full'/>
            </div>
            <span className='font-bold px-4 py-1 rounded-lg bg-amber-400 ml-3'>{title}</span>
        </div>
    </div>
  )
}

export default Restaurant