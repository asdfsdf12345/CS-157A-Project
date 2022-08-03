import  Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header';
import { UserContext } from '../UserContext';
import './Posts.css';

const Posts = () => {

  const {user,setUser} = useContext(UserContext);
  const [postList, setPostList] = useState([]);
  const[postText, setPostText] = useState('');

  useEffect(()=> {
    Axios.get("http://localhost:3001/api/get/posts",
    {
      userID : user,
    }).then((response)=>{
      setPostList(response.data);
    });
  }, []);

  const submitPost = () =>{
    Axios.post('http://localhost:3001/api/insert/posts', 
    {
      userID: user,
      postText: postText,
    })

    setPostList([
      ...postList,
      {postText: postText},
    ]);
  };

  return (
    <div>
      
    <div className="exercise">
    <Header/>
      <h1>Posts</h1>

      <div className='postform'>
      <label> post text </label>
          <input 
            type= "text" 
            name = "postText" 
            onChange={(e) =>{
              setPostText(e.target.value);
            }}
          />

      </div>
      <button onClick={submitPost}>Submit</button>
    </div>
    {postList.map((val)=>{
      return( 
        <div className='outline'>
          <div className="card">
            
            <div>{val.postText}</div> 
            
        </div>
        </div>
    )})}
    </div>
  )
}

export default Posts
