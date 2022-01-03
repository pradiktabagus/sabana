import React, {useEffect, useState, useCallback, useRef} from 'react';
import PropTypes from 'prop-types';
import { ItemArticle } from "../../components/ItemArticle"
import  { useFeeds } from "../../fetchController"
import { useDispatch, useSelector,  } from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';
import "./index.css";
interface HomeProps {
    openSidebar: boolean,
    setOpenSidebar: () => void
}
function Index({ 
    openSidebar = false, 
    setOpenSidebar 
}: HomeProps) {
    const dispatch = useDispatch()
    const { UpdatePage } = bindActionCreators(actionCreators, dispatch)
    const Feeds = useSelector((state: State) => state.Feeds)
    const { page } = Feeds
    const [ dataSource, setDataSource ] = useState([])
    const { ListData, error, loading, hasMore } = useFeeds({ offset: page, limit: 10})


    const observer = useRef<any>()
    const lastData = useCallback(
        (node) => {
          if (loading) return;
          if (observer.current) observer.current.disconnect();
          observer.current = new IntersectionObserver((ent: any) => {
            if (ent[0].isIntersecting && hasMore) {
              UpdatePage(page + 1);
            }
          });
          if (node) observer.current.observe(node);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [loading, hasMore]
      );
    useEffect(() => {
        let mount = true
        if(mount){
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
                            return <ItemArticle {...item} lastData={lastData} />;
                        } else {
                            return <ItemArticle {...item} lastData={null} />;
                        }
                    })}
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
