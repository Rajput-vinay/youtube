import React from 'react'

const VideoCard = ({info}) => {
   

    const {snippet, statistics } = info;
    const {channelTitle,title, thumbnails} = snippet;
    const {viewCount} = statistics;
  return (
    <div className='p-2  m-2 shadow-lg rounded-lg text-white hover:text-black hover:bg-gray-100  hover:shadow-gray-400 w-56 h-80'>
      <img className="rounded-lg" alt='thumbnails' src={thumbnails.medium.url} /> 
      
            <h2 className='  pt-4'>{title}</h2>
            <p className='pt2 font-thin'>{channelTitle}</p>
            <p className='pt-2 font-thin'>{viewCount} views</p>
     
    </div>
  )
};



export default VideoCard