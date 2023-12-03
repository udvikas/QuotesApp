
import React, { useEffect, useState } from 'react'

const API = () => {
    const [ post, setPost ] = useState({});

    const getPost = async () => {
        try {
            const postId = parseInt(Math.random() * 1643); // Total number of quotes available
            const response = await fetch('https://type.fit/api/quotes');
            const data = await response.json();
            const selectedPost = data[postId];
            setPost(selectedPost);
            console.log(selectedPost);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        getPost();
    },[]);
  return (
    <div>
      <h4>Quotes:  {post && post.author ? post.author : 'No quote available'}</h4>
      <button onClick={getPost}>Get Data</button>
    </div>
  )
}

export default API
