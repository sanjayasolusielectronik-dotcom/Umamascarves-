import React, { useState } from 'react';
import StoryReel from './StoryReel';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import { MOCK_POSTS, CURRENT_USER } from '../constants';
import { Post } from '../types';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);

  const handleCreatePost = (content: string, image?: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: CURRENT_USER,
      content,
      image,
      likes: 0,
      comments: [],
      shares: 0,
      timestamp: 'Just now',
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="flex-1 max-w-[700px] mx-auto pt-4 px-0 sm:px-4 pb-10">
      <StoryReel />
      <CreatePost onPostCreate={handleCreatePost} />
      
      <div className="flex flex-col gap-1">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      
      <div className="text-center text-gray-500 mt-8 mb-8 text-sm">
        <p>You're all caught up!</p>
      </div>
    </div>
  );
};

export default Feed;