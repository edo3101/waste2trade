import React from 'react';

function App() {

  return (
    <div className="w-full max-w-screen-12xl mx-auto px-4">
      <div className="navbar">
        <div className="flex-1">
          <a className="text-black text-xl">waste2trade</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal text-black px-4">
            <li><a>About Us</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;