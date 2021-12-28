import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector,  } from "react-redux"
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import { actionCreators, State } from '../../state';
import Header from "../../components/header/index"
import LoginComponent from "../Auth/Login"
import Register from "../Auth/Register"
import Home from "../Home/index"
import Post from "../Posts/Index"
import Search from "../Search/index"
import Profile from "../Profile/Index"
import Articles from "../Articles/Index";
import { WhoMe } from '../../api/controller/authController';
function App() {
  const dispatch = useDispatch()
  const { CurrentUser } = bindActionCreators(actionCreators, dispatch)
  const [openSidebar, setOpenSidebar] = useState(false)
  const User = useSelector((state: State) => state.User)
  const { isLogin } = User

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  const getData = async() => {
    try {
      await WhoMe().then(res => {
        const {data} = res
        CurrentUser({
          ...User,
          ...data,
        })
      }).catch(err => {
        console.error(err);
      })
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    let mount = true
    if(mount){
      if(isLogin) {
        getData()
      }
    }
    return () => {
      mount = false
    }
  }, [isLogin])
  return (
    <Router>
      <div className="relative body-content">
        <Header openSidebar={() => handleSidebar()} />
        <div className="page-content">
          {openSidebar ? <div className="backdrop" /> : null}
          <Switch>
            <Route exact path="/">
              <Home openSidebar={openSidebar} setOpenSidebar={handleSidebar} />
            </Route>
            <Route path="/login">
              <LoginComponent />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/post">
              <Post />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/user/:username">
              <Profile />
            </Route>
            <Route path="/read/:username/:title">
              <Articles />
            </Route>
            <Route path="*">
              <Redirect to="/"  />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
