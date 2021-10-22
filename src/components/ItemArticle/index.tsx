import React from 'react'
import { Link } from "react-router-dom"
import "./index.css"
export const ItemArticle = (props: any) => {
    return (
        <Link to={{ 
            pathname: `/pradiktabagus/sampoerna`, 
        }}>
            <div className="item-article sm:tw-w-full tw_mb-12 tw_relative">
                <div className="tw_flex-auto tw_pr-4 xs:tw_pr-1">
                    <div className="tw_flex tw_items-center tw_pb-2">
                        <img src="https://miro.medium.com/fit/c/60/60/1*LGG3Tb0NHy_LctSxasGFDw.jpeg" alt="thumbnail user" className="tw_mr-2 img-thumbnail-item" />
                        <div className="tw_flex tw_text-sm tw_font-semibold" >
                            <a href="">John Doe</a>
                            <div className="tw_flex tw_ml-1">
                                <h4>in</h4>
                                <a href="" className="tw_ml-1">Gohank</a>
                            </div>
                        </div>
                    </div>
                    <div className="tw_flex tw_flex-col tw_mb-3">
                        <h3 className="tw_text-base tw_font-bold tw_mb-2">
                            Introducing Courier - The Information Superhighway Between Mobile & server
                        </h3>   
                        <desc className="tw_text-sm tw_font-light tw_text-gray-500 tw_max-h-20 tw_overflow-hidden tw_overflow-ellipsis">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </desc>
                    </div>
                    <div className="tw_flex tw_justify-between tw_items-center tw_px-2 tw_absolute tw_w-full widget-item">
                        <div className="tw_text-sm tw_font-light tw_text-gray-500">September</div>
                        <span>
                            <img className="widget-bookmark" src="https://img.icons8.com/dotty/80/000000/add-bookmark.png" alt="bookmark"/>
                        </span>
                    </div>
                </div>
                <a href="https://miro.medium.com/fit/c/300/300/1*UiPdiNyIlFSoz6S-mNZglA.jpeg" className="tw_flex-auto thumbnail-article">
                    <img src="https://miro.medium.com/fit/c/300/300/1*UiPdiNyIlFSoz6S-mNZglA.jpeg" alt="thumbnail article" />
                </a>
            </div>
        </Link>
    )
}

export default ItemArticle
