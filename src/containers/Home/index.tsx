import React, {useEffect, useState, useRef, useCallback} from 'react';
import PropTypes from 'prop-types';
import { ItemArticle } from "../../components/ItemArticle"
import  { useFeeds } from "../../fetchController"
import LoadingIndicator from "../../components/loading/Loading"
import "./index.css";
interface HomeProps {
    openSidebar: boolean,
    setOpenSidebar: () => void
}
function Index({ 
    openSidebar = false, 
    setOpenSidebar 
}: HomeProps) {
    const [ dataSource, setDataSource ] = useState([])
    const [ halaman, setHalaman ] = useState(1)
    const { ListData, error, loading, hasMore } = useFeeds({ offset: halaman, limit: 20})
    const [ lastData, setLastData ] = useState(null)

    const observer = useRef<any>(
        new IntersectionObserver(
            (entries) => {
                const first = entries[0]
                if(first.isIntersecting){
                    setHalaman(prevState => prevState + 1)
                }
            }
        )
    )
    useEffect(() => {
        const currentElem = lastData
        const currentObs = observer.current
        if(currentElem) {
            currentObs.observe(currentElem)
        }
        return () => {
            if(currentElem){
                currentObs.unobserve(currentElem)
            }
        }
    }, [lastData])

    useEffect(() => {
        let mount = true
        if (mount){
            setDataSource(ListData)
        }
        return () => {
            mount = false
        }
    }, [ListData])

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
                    <select title="sort" name="sort" id="sort" defaultValue="news">
                        <option key={1} value="news">News</option>
                    </select>
                </div>
                <div className="feeds tw_p-2">
                    {dataSource?.map((item, index) => {
                        if (dataSource.length === index + 1) {
                            return <ItemArticle {...item} lastData={setLastData} />;
                        } else {
                            return <ItemArticle {...item} lastData={null} />;
                        }
                    })}
                    {loading && <LoadingIndicator />}
                </div>
            </div>
        </div>
    )
}

Index.propTypes = {
    openSidebar: PropTypes.bool,
    setOpenSidebar: PropTypes.func
}

export default Index
