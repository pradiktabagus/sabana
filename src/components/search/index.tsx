import React from 'react'
import "./index.css"

interface SearchProps {
    primary?: boolean,
    size?: 'small' | 'medium' | 'large';
    placeholder?: string,
    onClick?: () => void;
}
export const Search = ({
    primary = false,
    size= 'medium',
    placeholder,
    ...props
}: SearchProps) => {
    return (
        <input placeholder={placeholder} className={`sab-search`}/>
    )
}

export default Search
