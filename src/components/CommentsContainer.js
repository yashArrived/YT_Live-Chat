import React from 'react'
import user from '../assets/user.svg'

const commentsData = [
    {
        name:"Yash Tiwari",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit?",
        replies:[{ name:"Harry ",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit?",
        replies:[]}]
        
        
    },
    
    {
        name:"Sneh Singh",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit?",
        replies: [
            { name:"Yuvraj",
            text: "This is a nested reply"
            }
        ]
    },
    {
        name:"Yashu Tiwari",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit?",
        replies: [
           { name:"Yash Tiwari",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit?",
        replies:[{ name:"Yash Tiwari",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit?",
        replies:[{ name:"Yash Tiwari",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit?",
        replies:[{ name:"Yash Tiwari",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit?",
        replies:[{name:"Yash Tiwari",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit?",
        replies:[{ name:"Harry ",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit?",
        replies:[]}]}]}]}]}]}
        ]
    },
    {
        name:"Yash Tiwari",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit?",
        replies:[{ name:"Harry ",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit?",
        replies:[]}]
        
        
    },
]
// const commensData 
const Comment = ({data})=>{
    const{name,text,replies} = data;

    return (
        <div className="flex shadow-sm bg-gray-100 p-2 pt-4 rounded-lg my-2">
            <img className='w-12 h-12' src={user} alt="user" />
            <div className='px-3'>
                <p className="font-bold">{name}</p>
                <p >{text}</p>
            </div>
        </div>
    )
}
const CommentsList = ({comments}) => {

    return (
        <div>
            {   comments?.map((comment,index)=> (
            <div>
            <Comment key={index} data={comment}/>
            <div className='pl-5 ml-5 border border-l-black'>
            {/* <Comment key={index} data={comment}/> */}
            {/* <Comment key={index} data={comment}/> */}
              {/* THIS IS A COMMENT LIST */}
            {/* <Comment key={index} data={comment}/> */}
            <CommentsList comments={comment.replies}/>
    
            </div>
            </div>
            ))
            }
        </div>
    )
} 
const CommentsContainer = () => {

   
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments : </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer