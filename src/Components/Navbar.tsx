import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-white h-16 px-4 shadow-md">
      <div className="flex items-center">
        <div className="logo text-xl font-bold mr-4">Logo Placeholder</div>
        <div className="menu-items">
          <a href="#" className="mr-4 text-gray-700">About</a>
          <a href="#" className="text-gray-700">Explore by City</a>
        </div>
      </div>
      <div>
        <button 
        //onClick={() => console.log('Sign In clicked')} 
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
