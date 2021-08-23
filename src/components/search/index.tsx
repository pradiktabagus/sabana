import React from 'react'
import "./index.css"

interface SearchProps {
    primary?: boolean,
    size?: 'small' | 'medium' | 'large';
    placeholder?: string,
    onClick?: () => void,
    searchBtn?: boolean,
}
export const Search = ({
    primary = false,
    size= 'medium',
    placeholder,
    searchBtn = true,
    ...props
}: SearchProps) => {
    return (
        <div className={`${searchBtn ? "tw_flex" : ''} tw_relative`}>
            <input placeholder={placeholder} className={`sab-search sab-textfield`}/>
            {searchBtn ? (
            <button className="tw_absolute search-btn">
                <img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="search"/>
            </button>) : null}
            
        </div>
    )
}

export default Search
