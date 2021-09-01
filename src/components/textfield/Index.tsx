import React from 'react'
import PropTypes from 'prop-types'

interface TextfieldProps {
    label: string,
    keyname: string
}

export const Index = (props: TextfieldProps) => {
    const { label, keyname } = props
    return (
        <div>
            <label htmlFor={keyname} className="tw_block tw_text-sm tw_font-medium tw_text-gray-700">{label}</label>
            <div className="w_mt-1 w_relative w_rounded-md tw_shadow-sm">
                <input 
                    type="text" 
                    name={keyname} 
                    id={keyname} 
                    className="focus:tw_ring-indigo-500 focus:tw_border-indigo-500 tw_block tw_w-full tw_pl-7 tw_pr-12 sm:tw_text-sm tw_border-gray-300 tw_rounded-md" />
            </div>
        </div>
    )
}

Index.propTypes = {
    props: PropTypes
}


export default Index
