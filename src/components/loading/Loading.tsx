import React from 'react'
import "./index.css"
function Loading(props: any) {
    return (
        <div className="loading-container">
            <div className="lds-ellipsis">
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    )
}


export default Loading
