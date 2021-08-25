import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';
import Header from "../../components/header/index"
function App() {
  const dispatch = useDispatch()
  const { Login } = bindActionCreators(actionCreators, dispatch)
  const User = useSelector((state: State) => state.User)
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <div className="relative body-content">
      <Header openSidebar={() => setOpenSidebar(!openSidebar)} />
      <div className="page-content">
        {openSidebar ? <div className="backdrop" /> : null}
        <div className={`sidebar-content ${openSidebar ? "open" : ""}`} onClick={() => openSidebar ? setOpenSidebar(!openSidebar): null} >
          <div className="inner-sidebar">
            <div className="header-sidebar">
              <h3>Sabana</h3>
              <img src="https://img.icons8.com/windows/32/000000/macos-close.png" alt="close" onClick={() => setOpenSidebar(!openSidebar)} />
            </div>
            <ul>
              <li className="primary-item">
                <img src="https://img.icons8.com/color/48/000000/google-blog-search.png" alt="feeds"/>
                <label>Feeds</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="articles">
          <div className="widget-article">
            <h3>Posts</h3>
            <select name="sort" id="sort" defaultValue="news">
              <option value="news">News</option>
            </select>
          </div>
          <div className="feeds">list articles</div>
        </div>
      </div>
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
