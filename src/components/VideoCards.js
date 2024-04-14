import React from 'react'

const VideoCards = ({info}) => {
    if(info){

            // console.log(info);
        const {snippet} = info;
        const {channelTitle, title,thumbnails,publishedAt} = snippet;


        
    
    // const {snippet} = info
  return (
   
    <div className="m-2 p-2 shadow-lg w-72 h-80">
        
        <div>
            <img className='rounded-lg' src={thumbnails.medium.url} alt="Thumbnail" />
        </div>
        <div>
        <h1 className='font-bold py-2'>{title}</h1>
        </div>
        <h1>{channelTitle}</h1>
        {/* <h2>{publishedAt}</h2> */}
    </div>
  )
}
}
export default VideoCards

//higher order component takes an existing component and modifies a little
//debouncing - doing something very fast it skips some of the events