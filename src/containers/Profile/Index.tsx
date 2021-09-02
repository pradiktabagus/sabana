import React from 'react'
import PropTypes from 'prop-types'
import "./index.css"
function Index(props: any) {
    return (
        <div className="profile-page">
            <div className="profile-cover">
                <div className="profile-banner">
                    <div>
                        <span>
                            <img className="profile-picture" src="https://d2p5mifqdrbapa.cloudfront.net/photo-profile.jpg" alt="profile" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

Index.propTypes = {
    props: PropTypes.any
}

export default Index
