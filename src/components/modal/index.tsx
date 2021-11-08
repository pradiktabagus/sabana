import React, { useEffect, useState, useCallback, Fragment } from 'react'
import { CSSTransition } from "react-transition-group";
import "./index.css"
interface ModalProps {
    className?: string,
    visible: boolean,
    onClose: () => void,
    children?: React.ReactChild,
    name: string,
    useHeader?: boolean,
    useFooter?: boolean,
}
export const M = React.memo((props: any) => {
    return ReactDOM.createPortal(
        
    )
})
export const Modal = React.memo((props: ModalProps)) => {
    const {
        visible = false,
        children,
        useHeader = true,
        useFooter = true ,
        name,
        onClose,
    } = props
    const [open, setOpen] = useState(true)
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        setOpen(visible)
    },[visible])

    const hideModal = () => setVisible(false);
    const showModal = () => setVisible(true)  

    const escFunction = useCallback((event) => {
        event.currentTarget.id = name
        if(event.keyCode === 27 && visible) {
          hideModal()
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

    const Modal = ({ children }: { children: React.ReactChild}) => (
        <Fragment>
            <CSSTransition
                in={open}
                unmountOnExit
                timeout={{ enter: 0, exit: 300 }}
                classNames="alert"
            >
                <div className="mask-modal" >
                    <div className="modal">
                        <div className="tw_relative">
                            <img onClick={hideModal} className="btn-close" alt="close" src="https://img.icons8.com/plasticine/100/000000/close-window.png"/>
                        </div>
                        {useHeader ? <header className="modal-header">header</header> : null}                
                        <div className="modal-body">{children}</div>
                        {useFooter ? <footer className="modal-footer">footer</footer> : null}
                    </div>
                </div>
            </CSSTransition>
        </Fragment>    
    )  

    return {
        Modal,
        showModal
    }
}
