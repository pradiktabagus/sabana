import React from 'react'
import { connect } from 'react-redux'
import "./index.css"
import { HelperConstanta } from "../../helper/constanta"
import Search from '../search'
interface HeaderProps {
    User: Object
}
export const Index = (props: HeaderProps) => {
    // const {} = props
    return (
        <header>
            <nav className="navbar">
                <img src={`${HelperConstanta.BASE_CDN}/v1629387080/sabana_nvpoct.svg`} alt="Sabana" className="logo" />
                <Search placeholder="Search..."/>
                <button className="opt-user">auth</button>
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