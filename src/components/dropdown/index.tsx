import React, {Fragment} from 'react'
import "./index.css"
import { Menu, Transition } from "@headlessui/react"
import { Link } from "react-router-dom"
interface DropdownProps {
    overlay: any[],
    primary?: boolean,
    size?: 'small' | 'medium' | 'large',
    onClick?: () => void,
    className?: string,
    dropdownClassName?: string,
    children: React.ReactNode,
    placement?: 'left' | 'right',
    textPlacement?: 'left' | 'right'
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
export const Dropdown = ({
    primary = false,
    size= 'medium',
    className,
    children = "Button",
    overlay = [{name: 'Menu 1', pathname: "/"}, {name: 'Menu 2', pathname: "/"}, {name: 'Menu 3', pathname: "/"}],
    placement = 'right',
    textPlacement = 'left',
    dropdownClassName,
    ...props
}: DropdownProps) => {
    return (
        <Menu as="div" className={`${className} tw_relative tw_inline-block tw_text-${textPlacement}`}>
            <div>
                <Menu.Button>
                    {children}
                </Menu.Button>
            </div>
            <Transition 
                as={Fragment}
                enter="tw_transition tw_ease-out tw_duration-100"
                enterFrom="tw_transform tw_opacity-0 tw_scale-95"
                enterTo="tw_transform tw_opacity-100 tw_scale-100"
                leave="tw_transition tw_ease-in tw_duration-75"
                leaveFrom="tw_transform tw_opacity-100 tw_scale-100"
                leaveTo="tw_transform tw_opacity-0 tw_scale-95"
        
            >
                <Menu.Items className={`${dropdownClassName} tw_origin-top-${placement} tw_absolute tw_${placement}-0 tw_mt-2 tw_w-56 tw_rounded-md tw_shadow-lg tw_bg-white tw_ring-1 tw_ring-black tw_ring-opacity-5 tw_focus:outline-none`}>
                    <div className="tw_py-1">
                        {overlay.map(over => (
                            <Menu.Item>
                                {({ active }) => (
                                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                    <Link to={over.pathname}
                                        className={classNames(
                                            active ? 'tw_bg-gray-100 tw_text-gray-900' : 'tw_text-gray-700',
                                            'tw_block tw_px-4 tw_py-2 tw_text-sm tw_cursor-pointer'
                                        )}
                                    >
                                        {over.name}
                                    </Link>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default Dropdown
