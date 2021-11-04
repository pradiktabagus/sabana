import React from 'react';
import PropTypes from 'prop-types';
import { ItemArticle } from "../../components/ItemArticle"
import "./index.css";
interface HomeProps {
    openSidebar: boolean,
    setOpenSidebar: () => void
}
function index({ 
    openSidebar = false, 
    setOpenSidebar 
}: HomeProps) {
    return (
        <div className="home-page">
            <div className={`sidebar-content ${openSidebar ? "open" : ""}`} onClick={() => openSidebar ? setOpenSidebar() : null} >
                <div className="inner-sidebar">
                    <div className="header-sidebar">
                        <h3>Sabana</h3>
                        <img src="https://img.icons8.com/windows/32/000000/macos-close.png" alt="close" onClick={() => setOpenSidebar()} />
                    </div>
                    <ul>
                        <li className="primary-item">
                            <img src="https://img.icons8.com/color/48/000000/google-blog-search.png" alt="feeds"/>
                            <label>Feeds</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="articles">
                <div className="widget-article tw_p-2 tw_py-3">
                    <h3>Posts</h3>
                    <select name="sort" id="sort" defaultValue="news">
                        <option key={1} value="news">News</option>
                    </select>
                </div>
                <div className="feeds tw_p-2">
                    <ItemArticle />
                    <ItemArticle />
                    <ItemArticle />
                    <ItemArticle />
                </div>
            </div>
        </div>
    )
}

index.propTypes = {
    openSidebar: PropTypes.bool,
    setOpenSidebar: PropTypes.func
}

export default index
