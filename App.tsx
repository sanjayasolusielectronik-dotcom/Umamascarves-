import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <Navbar />
      
      <div className="flex pt-14 justify-center">
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Main Feed */}
        <div className="w-full lg:w-[calc(100%-600px)] lg:ml-[300px] lg:mr-[300px]">
          <Feed />
        </div>
        
        {/* Right Sidebar */}
        <Rightbar />
      </div>
    </div>
  );
}

export default App;