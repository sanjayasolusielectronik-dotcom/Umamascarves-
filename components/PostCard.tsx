import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal, X } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [liked, setLiked] = useState(post.likedByCurrentUser || false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm mb-4">
      {/* Header */}
      <div className="p-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover cursor-pointer" />
          <div>
            <h4 className="font-semibold text-gray-900 hover:underline cursor-pointer">{post.author.name}</h4>
            <div className="flex items-center gap-1 text-gray-500 text-xs">
              <span>{post.timestamp}</span>
              <span>·</span>
              <span className="text-gray-400">🌍</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
            <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full transition-colors">
            <MoreHorizontal size={20} />
            </button>
             <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full transition-colors">
            <X size={20} />
            </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-2">
        <p className="text-gray-900 whitespace-pre-wrap leading-normal">{post.content}</p>
      </div>

      {/* Image Attachment */}
      {post.image && (
        <div className="mt-2 cursor-pointer">
          <img src={post.image} alt="Post content" className="w-full h-auto object-cover max-h-[600px]" />
        </div>
      )}

      {/* Stats */}
      <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-1.5 cursor-pointer hover:underline">
          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <ThumbsUp size={12} className="text-white fill-white" />
          </div>
          <span className="text-gray-500 text-sm">{likeCount}</span>
        </div>
        <div className="flex gap-3 text-gray-500 text-sm">
          <span className="cursor-pointer hover:underline">{post.comments.length} comments</span>
          <span className="cursor-pointer hover:underline">{post.shares} shares</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-1 flex items-center justify-between">
        <button 
            onClick={handleLike}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 transition-colors ${liked ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <ThumbsUp size={20} className={liked ? "fill-blue-600" : ""} />
          <span className="font-medium text-sm">Like</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
          <MessageSquare size={20} />
          <span className="font-medium text-sm">Comment</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
          <Share2 size={20} />
          <span className="font-medium text-sm">Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;