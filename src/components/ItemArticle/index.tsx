import React from 'react'
import { Link,  } from "react-router-dom"
import "./index.css"
export const ItemArticle = (props: any) => {
    const {title, description, lastData, slug, author} = props
    return (    
        <Link to={{ 
            pathname: `/read/${author}/${slug}`, 
        }} ref={lastData}>
            <div className="item-article sm:tw-w-full tw_mb-7 tw_relative">
                <div className="tw_flex-auto tw_pr-4 xs:tw_pr-1">
                    <div className="tw_flex tw_items-center tw_pb-2">
                        <img src="https://miro.medium.com/fit/c/60/60/1*LGG3Tb0NHy_LctSxasGFDw.jpeg" alt="thumbnail user" className="tw_mr-2 img-thumbnail-item" />
                        <div className="tw_flex tw_text-sm tw_font-semibold" >
                            <a href="/me">John Doe</a>
                            <div className="tw_flex tw_ml-1">
                                <h4>in</h4>
                                <a href="/me" className="tw_ml-1">Gohank</a>
                            </div>
                        </div>
                    </div>
                    <div className="tw_flex tw_flex-col tw_mb-9">
                        <h3 className="tw_text-base tw_font-bold tw_mb-2">
                            {title}
                        </h3>   
                        <desc className="tw_text-sm tw_font-light tw_text-gray-500 tw_max-h-20 tw_overflow-hidden tw_overflow-ellipsis">
                            {description}
                        </desc>
                    </div>
                    <div className="tw_flex tw_justify-between tw_items-center tw_px-2 tw_absolute tw_w-full widget-item tw_bottom-0">
                        <div className="tw_text-sm tw_font-light tw_text-gray-500">September</div>
                        <span>
                            <img className="widget-bookmark" src="https://img.icons8.com/dotty/80/000000/add-bookmark.png" alt="bookmark"/>
                        </span>
                    </div>
                </div>
                <a href="https://miro.medium.com/fit/c/300/300/1*UiPdiNyIlFSoz6S-mNZglA.jpeg" className="thumbnail-article">
                    <img src="https://miro.medium.com/fit/c/300/300/1*UiPdiNyIlFSoz6S-mNZglA.jpeg" alt="thumbnail article" />
                </a>
            </div>
        </Link>
    )
}

export default ItemArticle
