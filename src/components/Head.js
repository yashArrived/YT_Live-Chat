import React, { useEffect, useState } from 'react'
import user from '../assets/user.svg'
import {useDispatch} from  "react-redux"
import { toggleMenu } from '../utils/appSlice';
import { yt_search_api } from '../utils/constants';


const Head = () => {
  const[searchQuery , setSearchQuery] = useState("");
  const [suggestions , setsuggestions] = useState([]);
  const [showSuggestions , setShowSuggestions] = useState(false);

  const dispatch = useDispatch()
      const handleToggleClick = ()=>{
              dispatch(toggleMenu());
  
      }
  useEffect(()=> {
 const timer =  setTimeout(()=> getSearchSuggestions(),200); 
   return()=>{
  clearTimeout(timer);
 }
  },[searchQuery])

const getSearchSuggestions = async() => {

  const data =await  fetch(yt_search_api + searchQuery)
    // console.log(data)

  const json = await data.json();

  console.log(json[1])
  setsuggestions(json[1]);

}

const SearchVideos =() => {
  
}
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex'>
        <img 
        className='h-8 cursor-pointer' onClick={handleToggleClick}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAARVBMVEX///8AAAD19fXo6OhDQ0Pv7+9JSUkbGxu8vLzJycmMjIz4+PjBwcGCgoJRUVFzc3MmJiaZmZkgICBeXl56enplZWVWVlaT91pBAAABgElEQVR4nO3b246CMBhFYebASSkqHt7/UWeYCdaLtmK82JtkfU+wEkMtP21VAQAAAAAAAOvtP2X2z+vqITStTBOGutzXNx9iTV/qC+q8Wcj37dRt/3a5vk5dtugyz8eoDluM6SelV3dF6QfloM6KDsnAozorOiYD1VWPthk4qauiKRl4UWdF6T8Tm3U6t1LXN3XX4pbZ0gzqsMWQ7vPfLFTVSd02O+X7fv+P5WvNVNywzonX8VtmvD7L+1PLrKkDAAAA8J76S2bNnr8L50bmHDLj6bu+Vb92tsX3OovRQmGwYNG35e8k7uM3m+lbbv5mNAK+JAP5TvKCbQba/8T2D4n9MmO/UNv/1flvFkwKC33+G9bKfss/M39pAgAAAPAm76NR5ofL3I/nuR9wtBgsFEYLNvO3zCFbn/skmfGbzfQtN38zGgGnj8rLV5gofdlAXfVom4H230nsL13ZX1vzWagzF/98VuoNfydxv77rfwHa/wr5zPsSPgAAAAAAAHD3AycCPgunKl+TAAAAAElFTkSuQmCC" alt="menu" />
        <img className='h-8 pl-3' src="https://i.pinimg.com/564x/1d/e4/59/1de459994e4b8dada70d323908ba7a02.jpg" alt="ytlogo" />
    </div>
    <div className='col-span-10 px-10'>
      <div >
        <input 
        className='w-1/2 border border-gray-400 p-2 rounded-l-full px-5'
        type="text" 
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value) }
        onFocus={()=> setShowSuggestions(true)}
        onBlur={()=> setShowSuggestions(false)}

        />
    
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100 hover:bg-gray-200 ' onClick={SearchVideos}>Search</button>
        </div>
        {showSuggestions &&  (<div className='fixed bg-white py-2 px-3 w-[41rem] border border-gray-100 rounded-md'>
          <ul className=''>
            {suggestions.map((s)=> ( <li key={s} className='py-2 px-3 m-1 shadow-sm  hover:bg-gray-100'>{s} </li>))}
           
    
          </ul>
        </div>)}
       
        </div>

<div className='col-span-1'>
    <img className='h-8' src={user} alt="user" />
</div>
    </div>

  )
};

export default Head