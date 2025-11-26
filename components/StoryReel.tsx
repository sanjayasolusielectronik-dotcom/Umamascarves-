import React from 'react';
import { Plus } from 'lucide-react';
import { MOCK_STORIES, CURRENT_USER } from '../constants';

const StoryReel: React.FC = () => {
  return (
    <div className="relative mb-6">
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {/* Create Story Card */}
        <div className="flex-shrink-0 w-[110px] md:w-[140px] h-[200px] md:h-[250px] bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer relative group">
          <div className="h-2/3 w-full">
            <img src={CURRENT_USER.avatar} alt="Me" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="h-1/3 w-full bg-white relative flex justify-center pt-6">
            <span className="text-xs font-semibold text-gray-900">Create story</span>
          </div>
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1 border-4 border-white">
            <Plus size={24} className="text-white" />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity"></div>
        </div>

        {/* Friend Stories */}
        {MOCK_STORIES.map((story) => (
          <div 
            key={story.id} 
            className="flex-shrink-0 w-[110px] md:w-[140px] h-[200px] md:h-[250px] bg-gray-200 rounded-xl overflow-hidden cursor-pointer relative group"
          >
            <img 
                src={story.image} 
                alt={`${story.user.name}'s story`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
            
            <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-4 border-blue-600 overflow-hidden">
                <img src={story.user.avatar} alt={story.user.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="absolute bottom-3 left-3 text-white font-semibold text-sm drop-shadow-md">
                {story.user.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryReel;