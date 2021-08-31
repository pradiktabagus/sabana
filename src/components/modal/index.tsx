import React, {  Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from "@headlessui/react"
import PropTypes from 'prop-types'
import "./index.css"
interface ModalProps {
    className?: string,
    classNameFooter?: string,
    title?: string,
    visible: boolean,
    onClose: (e: any) => void,
    children?: React.ReactNode,
    footer?: React.ReactNode,
    name: string,
    footerPosition?: 'start'|'center'|'end',
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
            <button key={name} name={name} className="btn-modal btn-danger" type="button" onClick={close}>Cancel</button>
            <button key={name} name={name} className="btn-modal btn-primary" type="button" onClick={onClick}>Ok</button>
        </Fragment>
    )
}
export const Modal = (props: ModalProps) => {
    const {
        visible = true,
        children,
        title = "New Modal", 
        footer = <DefaultFooter name={props.name} onCancel={props.onClose} onClick={props.onClose} />,
        footerPosition = 'end',
        useHeader = true,
        useFooter = true 
    } = props
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)

    useEffect(() => {
        setOpen(visible)
    }, [visible])

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="tw_fixed tw_z-10 tw_inset-0 tw_overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="tw_flex tw_items-end tw_justify-center tw_min-h-screen tw_pt-4 tw_px-4 tw_pb-20 tw_text-center sm:tw_block sm:tw_p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="tw_ease-out tw_duration-300"
                        enterFrom="tw_opacity-0"
                        enterTo="tw_opacity-100"
                        leave="tw_ease-in tw_duration-200"
                        leaveFrom="tw_opacity-100"
                        leaveTo="tw_opacity-0"
                    >
                        <Dialog.Overlay className="tw_fixed tw_inset-0 tw_bg-gray-500 tw_bg-opacity-75 tw_transition-opacity" />
                    </Transition.Child>
                    <span className="tw_hidden sm:tw_inline-block sm:tw_align-middle sm:tw_h-screen"  aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child as={Fragment}
                        enter="tw_ease-out tw_duration-300"
                        enterFrom="tw_opacity-0 tw_translate-y-4 sm:tw_translate-y-0 sm:tw_scale-95"
                        enterTo="tw_opacity-100 tw_translate-y-0 sm:tw_scale-100"
                        leave="tw_ease-in tw_duration-200"
                        leaveFrom="tw_opacity-100 tw_translate-y-0 sm:tw_scale-100"
                        leaveTo="tw_opacity-0 tw_translate-y-4 sm:tw_translate-y-0 sm:tw_scale-95"
                    >
                        <div className={`${props.className} modal-content tw_inline-block tw_align-bottom tw_bg-white tw_rounded-lg tw_text-left tw_overflow-hidden tw_shadow-xl tw_transform tw_transition-all sm:tw_my-8 sm:tw_align-middle sm:tw_max-w-lg sm:tw_w-full`}>
                            { useHeader 
                                ?   <div className="title-modal tw_bg-gray-50 tw_p-2">
                                        {title}
                                    </div>
                                : null}
                            
                            {/* body */}
                            <div className="tw_bg-white tw_px-4 tw_pt-5 tw_pb-4 sm:tw_p-6 sm:tw_pb-4">
                                {children}
                            </div>
                            {/* footer */}
                            { useFooter 
                                ?   <div className="tw_justify-end tw_w-full tw_bottom-0 tw_absolute tw_bg-gray-50 tw_px-4 tw_py-3 tw_sm:px-6 tw_sm:flex tw_sm:flex-row-reverse">
                                        {footer}
                                    </div>
                                : null
                            }
                           
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
