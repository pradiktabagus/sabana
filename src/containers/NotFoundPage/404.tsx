import React from 'react'
import PropTypes from 'prop-types'
import {useLocation} from "react-router-dom"
import "./index.css"
function Index(props: any) {
    let location = useLocation();
    return (
        <div className="post-page">
            not match {location.pathname}
        </div>
    )
}

Index.propTypes = {
    props: PropTypes.any
}

export default Index