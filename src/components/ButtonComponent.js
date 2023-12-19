import React from 'react'


const ButtonComponenet = ({item}) => {
  return (
    
    <div>
          <button className=' m-2 p-2 border border-gray-500 rounded-lg bg-gray-500 text-white hover:bg-white hover:text-black'>{item}</button>
    </div>
  )
}

export default ButtonComponenet