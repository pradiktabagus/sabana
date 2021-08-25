import React from 'react'
import "./index.css"

interface DropdownProps {
    overlay: React.ReactNode,
    primary?: boolean,
    size?: 'small' | 'medium' | 'large',
    placeholder?: string,
    onClick?: () => void,
    searchBtn?: boolean,
    className?: string,
    children: React.ReactNode
}
export const Dropdown = ({
    primary = false,
    size= 'medium',
    placeholder,
    searchBtn = true,
    className,
    children,
    overlay,
    ...props
}: DropdownProps) => {
    return (
        <div className="dropdown">
            <div>
                {children}
            </div>
            <div>
                {overlay}
            </div>
        </div>
    )
}

export default Dropdown
