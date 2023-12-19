import React from 'react'
import ButtonComponenet from './ButtonComponent'


const list =["All", "Music","Mixes", "Dramedy", "Arijit Sing", "lo-fi", "Bollywood Music", "News","Kavi sammelan", "Suryaputra karn", "Live", "Computer Science"];


const ButtonList = () => {
  return (
    <div className='flex'>
   {list.map((item) => <ButtonComponenet key={item} item={item}/>)}
    </div>
  )
}

export default ButtonList