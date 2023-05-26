import React from 'react'

const CountryName = ({country}) => {

  return (
    <div className=''>
        <p title={country.name }  className='bg-white text-black rounded-full py-3 font-bold px-2 cursor-pointer'>{country.name}</p>
    </div>
  )
}

export default CountryName