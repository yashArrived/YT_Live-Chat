import React, { useEffect, useState } from 'react'
import { yt_vids_api } from '../utils/constants';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

    const [videos , setVideos] = useState([]);

    useEffect(()=>{
       getVideos(); 
    },[]);
    const getVideos = async() =>{
        const data = await fetch(yt_vids_api);
        const json = await data.json();
        // console.log(json);
    setVideos(json.items);

    }
  return (
    <div className='flex flex-wrap'>
      {videos.map((video)=> (
      
      <Link key={video.id} to={"/watch?v=" + video.id}> <VideoCards  info={video}/></Link>
      
      ))}
        {/* <VideoCards info = {videos[0]}/> */}
    </div>
  )
}

export default VideoContainer