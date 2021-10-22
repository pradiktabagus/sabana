import React from 'react'
import "./index.css"
import { HelperConstanta } from "../../helper/constanta"
import { Link } from "react-router-dom"
import Search from '../search'
import Dropdown from '../dropdown'
interface HeaderProps {
    openSidebar: () => void
}
export const Index = (props: HeaderProps) => {
    const { openSidebar } = props
    return (
        <header className="header-app">
            <nav className="navbar">
                <a href="/">
                    <img src={`${HelperConstanta.BASE_CDN}/v1629387080/sabana_nvpoct.svg`} alt="Sabana" className="logo icon-desk"/>
                </a>
                <button onClick={openSidebar} className="burger-btn">
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
                <Dropdown overlay={['Profile','Login', 'Create Account']}>
                    <button className="opt-user">
                        <img src="https://img.icons8.com/doodle/48/000000/gender-neutral-user.png" alt="user"/>
                        {/* <img src="https://img.icons8.com/doodle/48/000000/user.png" alt="user"/> */}
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