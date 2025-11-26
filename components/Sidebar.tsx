import React from 'react';
import { Users, Store, MonitorPlay, Clock, Bookmark, Calendar, ChevronDown } from 'lucide-react';
import { CURRENT_USER } from '../constants';

const SidebarItem: React.FC<{ Icon: React.ElementType; text: string; color?: string }> = ({ Icon, text, color }) => (
  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
    <Icon className={`w-8 h-8 ${color || 'text-blue-500'}`} />
    <span className="font-medium text-gray-900">{text}</span>
  </div>
);

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:block fixed top-14 left-0 w-[300px] h-[calc(100vh-56px)] overflow-y-auto p-4 hover:overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300">
      <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors mb-2">
        <img src={CURRENT_USER.avatar} alt="Me" className="w-9 h-9 rounded-full object-cover" />
        <span className="font-medium text-gray-900">{CURRENT_USER.name}</span>
      </div>
      
      <SidebarItem Icon={Users} text="Friends" />
      <SidebarItem Icon={Store} text="Marketplace" />
      <SidebarItem Icon={MonitorPlay} text="Watch" />
      <SidebarItem Icon={Clock} text="Memories" />
      <SidebarItem Icon={Bookmark} text="Saved" color="text-purple-500" />
      <SidebarItem Icon={Calendar} text="Events" color="text-red-500" />
      
      <div className="border-t border-gray-300 my-4"></div>
      
      <h3 className="px-3 text-gray-500 font-semibold mb-2">Your Shortcuts</h3>
      <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg"></div>
        <span className="font-medium text-gray-900">React Developers Group</span>
      </div>
      <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg"></div>
        <span className="font-medium text-gray-900">Hiking Enthusiasts</span>
      </div>

       <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors mt-2">
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <ChevronDown size={20} />
        </div>
        <span className="font-medium text-gray-900">See more</span>
      </div>

      <div className="mt-auto pt-8 px-3 text-xs text-gray-500">
        <p>Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  · More · Meta © 2024</p>
      </div>
    </div>
  );
};

export default Sidebar;
