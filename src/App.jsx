import React, { useState } from 'react';

function App() {
  const [points, setPoints] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPoints((prevPoints) => prevPoints + 3);
      console.log('Image uploaded:', file);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex flex-col items-center justify-center p-4">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
        <div className="text-lg font-semibold tracking-wider">
          Points: <span className="font-bold">{points}</span>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-200 shadow-lg"
          onClick={handleLogin}
        >
          {isLoggedIn ? 'Account' : 'Login'}
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 mt-24 max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Upload an Image</h2>
        <p className="text-gray-600 mb-6">
          Earn <span className="text-pink-500 font-semibold">3 points</span> for each upload!
        </p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-gradient-to-r from-purple-500 to-pink-500
                     file:text-white hover:file:bg-pink-600
                     transition duration-200 cursor-pointer shadow-lg"
        />
      </div>
    </div>
  );
}

export default App;
