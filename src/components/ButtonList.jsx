import React from 'react'
import Button from './Button'

const buttonList = ["All", "Mixes", "News", "Sports", "Live", "Comedy", "Podcast", "Lo-Fi", "History", "Cricket"]

const ButtonList = () => {
  return (
    <div className='flex top-14 w-full fixed z-20 mt-0 bg-white'>
        {
            buttonList.map(btn => <Button key={btn} title={btn} />)
        }
    </div>
  )
}

export default ButtonList