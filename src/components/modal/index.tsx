import React, {  Fragment, useEffect, useRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from "react-transition-group";
import "./index.css"
interface ModalProps {
    className?: string,
    // classNameFooter?: string,
    // title?: string,
    visible: boolean,
    onClose: () => void,
    children?: React.ReactNode,
    // footer?: React.ReactNode,
    name: string,
    // footerPosition?: 'start'|'center'|'end',
    useHeader?: boolean,
    useFooter?: boolean,
}
interface DefaultProps {
    onClick: (e: any) => void,
    onCancel: (e: any) => void,
    name?: string
}
const DefaultFooter = (props: DefaultProps) => {
    const { onClick, onCancel, name } = props

    const close = (event: any) => {
        event.preventDefault()
        onCancel(event)
    }
    return (
        <Fragment>
            <button key={name} name={name} className="tw_w-full tw_inline-flex tw_justify-center tw_rounded-md tw_border tw_border-transparent tw_shadow-sm tw_px-4 tw_py-2 tw_bg-red-600 tw_text-base tw_font-medium tw_text-white hover:tw_bg-red-700 focus:tw_outline-none focus:tw_ring-2 focus:tw_ring-offset-2 focus:tw_ring-red-500 sm:tw_ml-3 sm:tw_w-auto sm:tw_text-sm" type="button" onClick={onClick}>Ok</button>
            <button key={name} name={name} className="tw_mt-3 tw_w-full tw_inline-flex tw_justify-center tw_rounded-md tw_border tw_border-gray-300 tw_shadow-sm tw_px-4 tw_py-2 tw_bg-white tw_text-base tw_font-medium tw_text-gray-700 hover:tw_bg-gray-50 focus:tw_outline-none focus:tw_ring-2 focus:tw_ring-offset-2 focus:tw_ring-indigo-500 sm:tw_mt-0 sm:tw_ml-3 sm:tw_w-auto sm:tw_text-sm" type="button" onClick={close}>Cancel</button>
        </Fragment>
    )
}
export const Modal = (props: ModalProps) => {
    const {
        visible = false,
        children,
        // title = "New Modal", 
        // footer = <DefaultFooter name={props.name} onCancel={props.onClose} onClick={props.onClose} />,
        // footerPosition = 'end',
        useHeader = true,
        useFooter = true ,
        name,
        onClose,
    } = props
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)

    useEffect(() => {
        setOpen(visible)
    },[visible])

    const escFunction = useCallback((event) => {
        event.currentTarget.id = name
        if(event.keyCode === 27 && visible) {
          onClose()
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [visible]);

    useEffect(() => {
        if(visible) {
            document.addEventListener("keydown", escFunction, false);
            return () => {
              document.removeEventListener("keydown", escFunction, false);
            };
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [visible]);

    return (
        <CSSTransition
            in={open}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
            classNames="alert"
        >
        <div className="mask-modal" >
            <div className="modal">
                <div className="tw_relative">
                    <img onClick={onClose} className="btn-close" alt="close" src="https://img.icons8.com/plasticine/100/000000/close-window.png"/>
                </div>
                {useHeader ? <header className="modal-header">header</header> : null}                
                <div className="modal-body">{children}</div>
                {useFooter ? <footer className="modal-footer">footer</footer> : null}
                
            </div>
        </div>
      </CSSTransition>
    )
}

Modal.propTypes = {
    props: PropTypes.any
}

export default Modal
