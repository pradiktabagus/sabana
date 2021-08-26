import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from "@headlessui/react"
import PropTypes from 'prop-types'
import "./index.css"
interface ModalProps {
    name: string,
    className?: string,
    classNameFooter?: string,
    title?: string,
    visible: boolean,
    onClose: (e: any) => void,
    children?: React.ReactNode,
    footer?: React.ReactNode,
    footerPosition?: 'start' | 'center' | 'end',
    useHeader?: boolean,
    useFooter?: boolean
}
interface DefaultProps {
    onClick: (e: any) => void,
    onCancel: (e: any) => void,
    name: string
}
const DefaultFooter = (props: DefaultProps) => {
    const { onClick, onCancel, name} = props
    const close = (event: any) => {
        event.preventDefault()
        onCancel(event)
    }
    return (
        <Fragment>
            <button name={name} className="tw_m-2 btn-modal btn-danger" type="button" onClick={close}>Cancel</button>
            <button className="tw_m-2 btn-modal btn-primary" type="button" onClick={onClick}>Ok</button>
        </Fragment>
    )
}
export const Modal = (props: ModalProps) => {
    const {
        visible = false,
        children,
        title = "New Modal", 
        footer = <DefaultFooter name={props.name} onCancel={props.onClose} onClick={e => props.onClose} />,
        footerPosition = "end",
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
                <div className="tw_flex tw_items-center tw_justify-center tw_min-h-screen tw_pt-4 tw_px-4 tw_pb-20 tw_sm:block tw_sm:p-0">
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
                    <span className="tw_hidden tw_sm:inline-block tw_sm:align-middle tw_sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child as={Fragment}
                        enter="tw_ease-out tw_duration-300"
                        enterFrom="tw_opacity-0 tw_translate-y-4 tw_sm:translate-y-0 tw_sm:scale-95"
                        enterTo="tw_opacity-100 tw_translate-y-0 tw_sm:scale-100"
                        leave="tw_ease-in tw_duration-200"
                        leaveFrom="tw_opacity-100 tw_translate-y-0 tw_sm:scale-100"
                        leaveTo="tw_opacity-0 tw_translate-y-4 tw_sm:translate-y-0 tw_sm:scale-95"
                    >
                        <div className={`${props.className} tw_relative modal-content tw_w-16 tw_sm:w-20 tw_md:w-32 tw_lg:w-48 tw_inline-block tw_align-bottom tw_bg-white tw_rounded-lg tw_overflow-hidden tw_shadow-xl tw_transform tw_transition-all tw_sm:my-8 tw_sm:align-middle`}>                            
                            {/* title */}
                            { useHeader 
                                ?   <div className="title-modal tw_bg-gray-50 tw_py-2.5 tw_px-2">
                                        {title}
                                    </div> 
                                : null
                            }
                            {/* body */}
                            <div className="tw_bg-white tw_px-4 tw_pt-5 tw_pb-4 tw_sm:p-6 tw_sm:pb-4">
                                {children}
                            </div>
                            {/* footer */}
                            {useFooter
                                ?   <div className={`tw_justify-${footerPosition} tw_flex tw_w-full tw_bottom-0 tw_absolute tw_bg-gray-50 tw_px-4 tw_py-3 tw_sm:px-6 tw_sm:flex tw_sm:flex-row-reverse`}>
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
