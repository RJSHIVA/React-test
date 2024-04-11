import React from 'react';
import ReactPlayer from 'react-player/youtube';
import Footer from './Footer';
import Header from './Header';

const Classes = () => {
  return (
    <>
    <Header/>
    <div className="bg-white   rounded-lg shadow-md p-4 mb-4 flex items-center ">
      {/* Video */}
      <div className="w- mr-4">
        <ReactPlayer
          className=" w-2 h-40 rounded-lg"
          url="https://youtu.be/JQVBGtZMqgU?si=fjFAQULbuKgkjlDT"
          controls
        />

      </div>
      
      {/* Video Info */}
      <div className="w-2/3">
        <h2 className="text-lg font-semibold mb-2">Video Title</h2>
        <p className="text-gray-600 mb-4">Video Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla libero ut justo porta, sit amet vehicula sem vehicula. Integer dapibus arcu in convallis.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Watch Classes</button>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center ">
      {/* Video */}
      <div className="w- mr-4">
        <ReactPlayer
          className=" w-2 h-40 rounded-lg"
          url="https://youtu.be/aAcI_FdfkA8?si=RUZ8jw6ZS3RDPUyb"
          controls
        />
        
      </div>
      
      {/* Video Info */}
      <div className="w-2/3">
        <h2 className="text-lg font-semibold mb-2">Video Title</h2>
        <p className="text-gray-600 mb-4">Video Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla libero ut justo porta, sit amet vehicula sem vehicula. Integer dapibus arcu in convallis.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Watch Classes</button>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center ">
      {/* Video */}
      <div className="w- mr-4">
        <ReactPlayer
          className=" w-2 h-40 rounded-lg"
          url="https://youtu.be/1i04-A7kfFI?si=Kh02zYG5SSN0cpkh"
          controls
        />
        
      </div>
      
      {/* Video Info */}
      <div className="w-2/3">
        <h2 className="text-lg font-semibold mb-2">Video Title</h2>
        <p className="text-gray-600 mb-4">Video Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla libero ut justo porta, sit amet vehicula sem vehicula. Integer dapibus arcu in convallis.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Watch Classes</button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Classes;
