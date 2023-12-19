import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from '../utils/constant'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const VideoContainer = () => {
const [videos, setVideos] = useState([]);

 useEffect (()=>{
   getVideos(); 
 },[])

 const getVideos = async ()=>{
  const data = await fetch(YOUTUBE_VIDEOS_API);
  const json = await data.json();
console.log(json);
  setVideos(json.items)
 }

  return (

   
    <div className='flex flex-row flex-wrap justify-between '>
    
{videos.map((video) => <Link key={video.id} to={"/watch?v=" +video.id}><VideoCard  info={video} /></Link>)}


    </div>

  )
}

export default VideoContainer;