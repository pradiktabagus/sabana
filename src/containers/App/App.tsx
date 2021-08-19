import React from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';
import Header from "../../components/header/index"
function App() {
  const dispatch = useDispatch()
  const { Login } = bindActionCreators(actionCreators, dispatch)
  const User = useSelector((state: State) => state.User)
  return (
    <div className="relative">
      <Header User={{name: "Rofi"}}/>
    </div>
    // <div className="tw_bg-gray-900 tw_p-20 tw_h-screen tw_flex tw_justify-center tw_items-start tw_flex-col">
    //   <h1 className="tw_text-5xl tw_text-white">Hello Tailwind 👋</h1>
    //   <p className="tw_text-gray-400 tw_mt-5 tw_text-lg">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
    //     consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
    //     eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
    //   </p>
    //   <p>{User}</p>
    //   <button className="tw_p-4 tw_bg-green-600 tw_rounded-lg tw_font-bold tw_text-white tw_mt-5 tw_hover:bg-gray-600" onClick={() => Login("nanali")}>
    //     Hello Friends 🚀
    //   </button>
    // </div>
  );
}

export default App;
