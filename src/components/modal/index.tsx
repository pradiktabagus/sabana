import React, { useEffect, useState, Fragment, useRef } from 'react'
import styled from "styled-components"
import Portal from "./portal"
import "./index.css"
interface ModalProps {
    className?: string,
    open: boolean,
    onClose: () => void,
    children: React.ReactChild,
    useHeader?: boolean,
    useFooter?: boolean,
}

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(51, 51, 51, 0.3);
    backdrop-filter: blur(1px);
    opacity: 0;
    transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 200ms;
    display: flex;
    align-items: center;
    justify-content: center;

    & .modal-content {
        transform: translateY(100px);
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
        width: 100%;
        min-height: 400px;
        background-color: white;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -ms-border-radius: 4px;
        -o-border-radius: 4px;
        border-radius: 4px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        @media (min-width: 768px){
            width: 500px;
        }
    }

    &.active {
        transition-duration: 250ms;
        transition-delay: 0ms;
        opacity: 1;

        & .modal-content {
            transform: translateY(0);
            opacity: 1;
            transition-delay: 150ms;
            transition-duration: 350ms;
        }
    }
`;

const Content = styled.div`
    position: relative;
    padding: 20px;
    box-sizing: border-box;
    min-height: 50px;
    min-width: 50px;
    max-height: 80%;
    max-width: 80%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: white;
    border-radius: 2px;
`
export default function Modal({
    children, 
    open, 
    onClose,
    useFooter = false,
    useHeader = false
}: any){
    const [active, setActive] = useState(false)
    const backdrop = useRef<any>(null)
    console.log("modal");
    
    useEffect(() => {
        const { current } = backdrop
        const transitionEnd = () => setActive(open)
        const keyHandler = (e: any) => [27].indexOf(e.which) >= 0 && onClose()
        const clickHandler = (e: any) => e.target === current && onClose()

        if(current){
            current?.addEventListener("transitionend", transitionEnd);
            current?.addEventListener("click", clickHandler);
            window.addEventListener("keyup", keyHandler);
        }

        if(open){
            window.setTimeout(() => {
                (document.activeElement as HTMLElement).blur();
                setActive(open);
                document.querySelector("#root")?.setAttribute("inert", "true");
            }, 10)
        }
        return () => {
            if(current){
                current.removeEventListener('transitionend', transitionEnd)
                current.removeEventListener('click', clickHandler)
            }
            document.querySelector('#root')?.removeAttribute('inert')
            window.removeEventListener('keyup', keyHandler)
        }
    }, [open, onClose])

    return (
        <Fragment>
            {(open || active) && (
                <Portal className="modal-portal">
                    <Backdrop ref={backdrop} className={active && open && 'active'}>
                        <Content className="modal-content">{children}</Content>
                    </Backdrop>
                </Portal>
            )}
        </Fragment>
    );
}
// export const Modal = React.memo((props: ModalProps)) => {
//     const {
//         visible = false,
//         children,
//         useHeader = true,
//         useFooter = true ,
//         name,
//         onClose,
//     } = props
//     const [open, setOpen] = useState(true)
//     const [isVisible, setVisible] = useState(false)

//     useEffect(() => {
//         setOpen(visible)
//     },[visible])

//     const hideModal = () => setVisible(false);
//     const showModal = () => setVisible(true)  

//     const escFunction = useCallback((event) => {
//         event.currentTarget.id = name
//         if(event.keyCode === 27 && visible) {
//           hideModal()
//         }
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//       }, [visible]);

//     useEffect(() => {
//         if(visible) {
//             document.addEventListener("keydown", escFunction, false);
//             return () => {
//               document.removeEventListener("keydown", escFunction, false);
//             };
//         }
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//       }, [visible]);

//     const Modal = ({ children }: { children: React.ReactChild}) => (
//         <Fragment>
//             <CSSTransition
//                 in={open}
//                 unmountOnExit
//                 timeout={{ enter: 0, exit: 300 }}
//                 classNames="alert"
//             >
//                 <div className="mask-modal" >
//                     <div className="modal">
//                         <div className="tw_relative">
//                             <img onClick={hideModal} className="btn-close" alt="close" src="https://img.icons8.com/plasticine/100/000000/close-window.png"/>
//                         </div>
//                         {useHeader ? <header className="modal-header">header</header> : null}                
//                         <div className="modal-body">{children}</div>
//                         {useFooter ? <footer className="modal-footer">footer</footer> : null}
//                     </div>
//                 </div>
//             </CSSTransition>
//         </Fragment>    
//     )  

//     return {
//         Modal,
//         showModal
//     }
// }
