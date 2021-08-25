import React from 'react'
import { connect } from 'react-redux'
import "./index.css"
import { HelperConstanta } from "../../helper/constanta"
import Search from '../search'
interface HeaderProps {
    openSidebar: () => void
}
export const Index = (props: HeaderProps) => {
    const { openSidebar } = props
    return (
        <header>
            <nav className="navbar">
                <img src={`${HelperConstanta.BASE_CDN}/v1629387080/sabana_nvpoct.svg`} alt="Sabana" className="logo icon-desk" />
                <button onClick={openSidebar} className="burger-btn">
                    <img src={`${HelperConstanta.BASE_CDN}/v1629387080/sabana_nvpoct.svg`} alt="Sabana" className="logo" />
                </button>
                <div className="title-apps">Sabana</div>
                <Search className="search-bar" placeholder="Search..."/>
                <button className="search-btn-mobile">
                    <img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="search"/>
                </button>
                <button className="opt-user">
                    <img src="https://img.icons8.com/doodle/48/000000/user.png" alt="user"/>
                </button>
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