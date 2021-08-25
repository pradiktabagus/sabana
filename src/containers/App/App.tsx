import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { actionCreators, State } from '../../state';
import Header from "../../components/header/index"
import Login from "../Auth/Login"
import Register from "../Auth/Register"
import Home from "../Home/index"
function App() {
  // const dispatch = useDispatch()
  // const { Login } = bindActionCreators(actionCreators, dispatch)
  // const User = useSelector((state: State) => state.User)
  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }
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
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
