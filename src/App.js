import { useEffect, useState } from 'react';
import { getPosts } from './API/api';
import './App.css';
import PostCard from './component/postCard/postCard';

function App() {

  const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response.data);
    });
  }, []);


  return (
    <div className='cardView'>
      {posts && posts.map((post, index) => {
        return <PostCard key={index} post={post}></PostCard>
      })}
    </div>
  );
}

export default App;
