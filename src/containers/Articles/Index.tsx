import React from 'react'
import PropTypes from 'prop-types'
import "./index.css"
function Articles(props: any) {
    return (
        <div className="article-page">
            <aside>side</aside>
            <main>body</main>
            <div>profile</div>
        </div>
    )
}

Articles.propTypes = {
    props: PropTypes.any
}

export default Articles
