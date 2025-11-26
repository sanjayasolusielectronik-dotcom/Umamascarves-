import React from 'react';
import { Video, Search, MoreHorizontal, Gift } from 'lucide-react';
import { MOCK_CONTACTS } from '../constants';

const Rightbar: React.FC = () => {
  return (
    <div className="hidden lg:block fixed top-14 right-0 w-[300px] h-[calc(100vh-56px)] overflow-y-auto p-4 pt-6">
      <div className="mb-6">
        <h3 className="text-gray-500 font-semibold mb-3">Sponsored</h3>
        <div className="flex items-center gap-3 mb-4 cursor-pointer hover:bg-gray-200 p-2 rounded-lg -ml-2">
            <div className="w-28 h-28 bg-gray-300 rounded-lg flex-shrink-0 bg-[url('https://picsum.photos/seed/ad1/200/200')] bg-cover"></div>
            <div className="flex flex-col">
                <span className="font-semibold text-sm">Learn React Fast</span>
                <span className="text-xs text-gray-500">frontendmastery.com</span>
            </div>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 p-2 rounded-lg -ml-2">
            <div className="w-28 h-28 bg-gray-300 rounded-lg flex-shrink-0 bg-[url('https://picsum.photos/seed/ad2/200/200')] bg-cover"></div>
            <div className="flex flex-col">
                <span className="font-semibold text-sm">Best Coffee Beans</span>
                <span className="text-xs text-gray-500">coffeelovers.io</span>
            </div>
        </div>
      </div>

      <div className="border-t border-gray-300 my-4"></div>

      <div className="flex items-center justify-between text-gray-500 mb-2">
        <h3 className="font-semibold text-gray-500">Contacts</h3>
        <div className="flex gap-3">
          <Video size={18} className="cursor-pointer hover:text-gray-700" />
          <Search size={18} className="cursor-pointer hover:text-gray-700" />
          <MoreHorizontal size={18} className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      <ul className="space-y-1">
        {MOCK_CONTACTS.map((contact) => (
          <li key={contact.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <div className="relative">
              <img src={contact.avatar} alt={contact.name} className="w-9 h-9 rounded-full object-cover" />
              {contact.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>
            <span className="font-medium text-gray-900 text-sm">{contact.name}</span>
          </li>
        ))}
      </ul>
      
      <div className="border-t border-gray-300 my-4"></div>
      
      <h3 className="font-semibold text-gray-500 mb-2">Group Conversations</h3>
       <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-xs">
                DEV
            </div>
            <span className="font-medium text-gray-900 text-sm">Dev Team Standup</span>
       </li>

    </div>
  );
};

export default Rightbar;