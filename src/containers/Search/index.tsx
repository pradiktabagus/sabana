import React from 'react'
import PropTypes from 'prop-types'
import "./index.css"
import Search from '../../components/search'
function Index(props:any) {
    return (
        <div className="search-page">
            <div className="search-inner tw_p-4">
                <Search className="tw_hidden xs:tw_block tw_w-full" placeholder="Search something here... "/>
                <div className="xs:tw_my-4">
                    <ul>
                        {/* TODO list item belum di buat */}
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li>item 5</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

Index.propTypes = {
    props: PropTypes.any
}

export default Index
