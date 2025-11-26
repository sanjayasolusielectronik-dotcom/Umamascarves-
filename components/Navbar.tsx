import React from 'react';
import { Search, Home, MonitorPlay, Store, Users, Bell, MessageCircle, Menu, UserCircle } from 'lucide-react';
import { CURRENT_USER } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white shadow-md z-50 px-4 flex items-center justify-between">
      {/* Left: Logo & Search */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="text-blue-600 text-3xl font-bold tracking-tighter cursor-pointer">
          <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">S</span>
        </div>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search SocialSphere"
            className="bg-gray-100 rounded-full py-2 pl-10 pr-4 w-60 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
        <div className="md:hidden bg-gray-100 p-2 rounded-full text-gray-600">
           <Search size={20} />
        </div>
      </div>

      {/* Center: Navigation Icons (Hidden on small mobile) */}
      <div className="hidden md:flex items-center gap-1 lg:gap-8 h-full">
        <div className="h-full flex items-center px-4 md:px-10 border-b-2 border-blue-600 text-blue-600 cursor-pointer">
          <Home size={28} />
        </div>
        <div className="h-full flex items-center px-4 md:px-10 border-b-2 border-transparent hover:bg-gray-100 rounded-lg text-gray-500 cursor-pointer transition-colors">
          <MonitorPlay size={28} />
        </div>
        <div className="h-full flex items-center px-4 md:px-10 border-b-2 border-transparent hover:bg-gray-100 rounded-lg text-gray-500 cursor-pointer transition-colors">
          <Store size={28} />
        </div>
        <div className="h-full flex items-center px-4 md:px-10 border-b-2 border-transparent hover:bg-gray-100 rounded-lg text-gray-500 cursor-pointer transition-colors">
          <Users size={28} />
        </div>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-2 md:gap-3">
        <div className="hidden md:flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer transition-colors">
          <Menu size={20} />
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer transition-colors">
          <MessageCircle size={20} />
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer transition-colors">
          <Bell size={20} />
        </div>
        <div className="relative cursor-pointer ml-1">
          <img
            src={CURRENT_USER.avatar}
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-200 object-cover"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;