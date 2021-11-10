import { useMemo, useEffect } from 'react'
import ReactDOM from 'react-dom'

/**
 * @description get parent and className props as well as the children
 */
export default function Portal({children, parent, className}: any){
    // Create div to contain everything
    const el = useMemo(() => document.createElement("div"), [])
    // on mount function
    useEffect(() => {
         // work out target in the DOM based on parent prop
        const target = parent && parent.appendChild ? parent : document.body;
        // default class
        const classList = ['portal-container']
        // If className prop is present add each class the classList
        if(className) className.split(" ").forEach((item: any) => classList.push(item))
        classList.forEach((item: any) => el.classList.add(item))
        // Append element to dom
        target.appendChild(el)
        // On unmount function
        return () => {
            target.removeChild(el)
        }
    }, [el, parent, className])
    return ReactDOM.createPortal(children, el)
}