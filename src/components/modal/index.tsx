import React, { Children, Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from "@headlessui/react"
import PropTypes from 'prop-types'
import "./index.css"
interface ModalProps {
    className?: string,
    classNameFooter?: string,
    title?: string,
    visible: boolean,
    onClose: () => void,
    children?: React.ReactNode,
    footer?: React.ReactNode
}
interface DefaultProps {
    onClick: () => void,
    onCancel: () => void
}
const DefaultFooter = (props: DefaultProps) => {
    const { onClick, onCancel} = props
    return (
        <Fragment>
            <button className="btn-modal btn-danger" type="button" onClick={onCancel}>Cancel</button>
            <button className="btn-modal btn-primary" type="button" onClick={onClick}>Ok</button>
        </Fragment>
    )
}
export const Modal = (props: ModalProps) => {
    const {
        visible = true,
        children,
        title = "New Modal", 
        footer = <DefaultFooter onCancel={props.onClose} onClick={props.onClose} /> 
    } = props
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)

    useEffect(() => {
        setOpen(visible)
    }, [visible])
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="tw_fixed tw_z-10 tw_inset-0 tw_overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="tw_flex tw_items-end tw_justify-center tw_min-h-screen tw_pt-4 tw_px-4 tw_pb-20 sm:tw_block sm:tw_p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="tw_ease-out tw_duration-300"
                        enterFrom="tw_opacity-0"
                        enterTo="tw_opacity-100"
                        leave="tw_ease-in tw_duration-200"
                        leaveFrom="tw_opacity-100"
                        leaveTo="tw_opacity-0"
                    >
                        <Dialog.Overlay className="tw_fixed tw_inset-0 tw_bg-gray-500 tw_bg-opacity-75 tw_transition-opacity"/>
                    </Transition.Child>
                    <span className="tw_hidden sm:tw_inline-block sm:tw_align-middle sm:tw_h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child as={Fragment}
                        enter="tw_ease-out tw_duration-300"
                        enterFrom="tw_opacity-0 tw_translate-y-4 sm:tw_translate-y-0 tw_sm:scale-95"
                        enterTo="tw_opacity-100 tw_translate-y-0 tw_sm:scale-100"
                        leave="tw_ease-in tw_duration-200"
                        leaveFrom="tw_opacity-100 tw_translate-y-0 tw_sm:scale-100"
                        leaveTo="tw_opacity-0 tw_translate-y-4 tw_sm:translate-y-0 tw_sm:scale-95"
                    >
                        <div className={`${props.className} tw_relative modal-content tw_w-1/2 tw_inline-block tw_align-bottom tw_bg-white tw_rounded-lg tw_overflow-hidden tw_shadow-xl tw_transform tw_transition-all tw_sm:my-8 tw_sm:align-middle tw_sm:max-w-lg tw_sm:w-full`}>
                            <div className="title-modal tw_bg-gray-50 tw_p-2">
                                {title}
                            </div>
                            {/* title */}
                            {/* body */}
                            <div className="tw_bg-white tw_px-4 tw_pt-5 tw_pb-4 tw_sm:p-6 tw_sm:pb-4">
                                {children}
                            </div>
                            {/* footer */}
                            <div className="tw_justify-end tw_w-full tw_bottom-0 tw_absolute tw_bg-gray-50 tw_px-4 tw_py-3 tw_sm:px-6 tw_sm:flex tw_sm:flex-row-reverse">
                                {footer}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

Modal.propTypes = {
    props: PropTypes.any
}

export default Modal
