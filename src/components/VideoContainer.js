import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from '../utils/constant'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const VideoContainer = () => {
const [videos, setVideos] = useState([]);
const [nextPageToken , setNextPageToken] = useState("");
 
 useEffect (()=>{
   getVideos(); 
 },[])


 useEffect(() =>{
  window.addEventListener('scroll',infiniteScroll, true);
  return () =>{
   window.removeEventListener('scroll', infiniteScroll, true);
  }
 } ,[nexPageToken]);

 
 const getVideos = async ()=>{
  const url = nextPageToken !== ""? `${YOUTUBE_VIDEOS_API}&pageToken=${nextPageToken}`:YOUTUBE_VIDEOS_API;
  const data = await fetch(url);
  const json = await data.json();
setNextPageToken(json?.nextPageToken);
  
  setVideos(...videos,...json?.items)
 }
 
const infiniteScroll = () => {
    if (window.innerHeight + Math.round(document.documentElement.scrollTop) >= document.documentElement.offsetHeight - 300) {
      getVideos();
    }
  }
  return (

   
    <div className='flex flex-row flex-wrap justify-between '>
    
{videos.map((video) => <Link key={video.id} to={"/watch?v=" +video.id}><VideoCard  info={video} /></Link>)}


    </div>

  )
}

export default VideoContainer;
