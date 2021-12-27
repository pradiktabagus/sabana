import React from 'react'
import "./index.css"
import { HelperConstanta } from "../../helper/constanta"
import { Link } from "react-router-dom"
import {  useSelector } from "react-redux"
import { State } from '../../state';
import Search from '../search'
import Dropdown from '../dropdown'
interface HeaderProps {
    openSidebar: () => void
}
export const Index = (props: HeaderProps) => {
    const { openSidebar } = props
    const User = useSelector((state: State) => state.User)

    const OverlayItem = [ 
        {name: User?.username, pathname: `/user/@${User?.username}`, active: User?.isLogin}, 
        {name: "Login", pathname: "/login", active: User?.isLogin ? false : true}, 
        {name: "Create Account", pathname: "/register", active: User?.isLogin ? false : true},
        {name: "Logout", pathname: "/logout", active: User?.isLogin }
    ]
    
    return (
        <header className="header-app">
            <nav className="navbar">
                <Link to="/"> <img src={`${HelperConstanta.BASE_CDN}/v1629387080/sabana_nvpoct.svg`} alt="Sabana" className="logo icon-desk"/></Link>
                <button type="button" onClick={openSidebar} className="burger-btn">
                    <img src={`${HelperConstanta.BASE_CDN}/v1629387080/sabana_nvpoct.svg`} alt="Sabana" className="logo" />
                </button>
                <div className="title-apps"><Link to="/">Sabana</Link></div>
                <Search className="search-bar" placeholder="Search..."/>
                <button className="search-btn-mobile">
                    <img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="search"/>
                </button>
                <Link className="search-btn-mobile" to="/post">
                    <img src="https://img.icons8.com/ios/50/000000/sign-up.png" alt="search"/>
                </Link>
                <Dropdown overlay={OverlayItem.filter(x => x.active === true)}>
                    <button className="opt-user" type="button">
                        <img src="https://img.icons8.com/doodle/48/000000/gender-neutral-user.png" alt="user"/>
                    </button>
                </Dropdown>
            </nav>
        </header>
    )
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Index)
export default Index