import React from 'react';
import './App.css';
function App() {
  return (
    <div className="tw_bg-gray-900 tw_p-20 tw_h-screen tw_flex tw_justify-center tw_items-start tw_flex-col">
      <h1 className="tw_text-5xl tw_text-white">Hello Tailwind 👋</h1>
      <p className="tw_text-gray-400 tw_mt-5 tw_text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
        eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
      </p>
      <button className="tw_p-4 tw_bg-green-600 tw_rounded-lg tw_font-bold tw_text-white tw_mt-5 tw_hover:bg-gray-600">
        Hello Friends 🚀
      </button>
    </div>
  );
}

export default App;
