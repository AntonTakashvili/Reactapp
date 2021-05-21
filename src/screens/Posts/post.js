import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import PostCard from '../../components/PostsCard/post';
import SearchInput from '../../components/Input/Search';

import './index.css';

const Posts = () => {
  const history = useHistory();

  const [postsArray, setPostsArray] = useState([]);
  const [displayNumber, setDisplayNumber] = useState(100);

  const renderPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => setPostsArray(json));
  };

  useEffect(() => {
    renderPosts();
  }, []);

  const logOutHandler = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <div>
      <button className="select-amount-button-log-out" onClick={logOutHandler}>
        Log Out
      </button>
      <h1>Posts</h1>
      <SearchInput renderPosts={renderPosts} setPostsArray={setPostsArray} />
      <div className="filter-button-cont">
        <button
          className="select-amount-button"
          onClick={() => setDisplayNumber(10)}>
          10 posts
        </button>
        <button
          className="select-amount-button"
          onClick={() => setDisplayNumber(50)}>
          50 posts
        </button>
        <button
          className="select-amount-button"
          onClick={() => setDisplayNumber(100)}>
          100 posts
        </button>
      </div>

      <div className="posts-container">
        {postsArray.slice(0, displayNumber).map((info) => (
          <PostCard info={info} key={info.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
