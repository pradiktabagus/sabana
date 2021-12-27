import React from 'react'
import PropTypes from 'prop-types'

interface ButtonProps {
    name: string
    onClick?: () => void | undefined
    img?: string,
    id: string,
}
function ButtonAuth(props: ButtonProps) {
    const {name, onClick, img, id } = props
    return (
        <button id={id} name={name} type={"submit"} className="btn-auth" onClick={onClick}>
            {img && <img src={img} alt={name}/>}
            <span className="tw_text-lg tw_font-semibold">
                {name}
            </span>
        </button>
    )
}

ButtonAuth.propTypes = {
    props: PropTypes.any
}

export default ButtonAuth
