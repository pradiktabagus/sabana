import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import "./index.css"
import Modal from '../../components/modal'
import { LoginController } from '../../api/controller/authController'
function Login(props: any) {
    const [modal, setModal] = useState({
        email: false
    })
    const showCloseModal = (event: any) => {
        const { name } =  event
        setModal(prevState => ({
            ...prevState,
            [name]: !modal.email
        }))
    }
    return (
        <div className="auth-page">
            <div className="auth-content">
                <div className="auth-background" />
                <div className="login-content">
                    <div className="header-login">
                        <h2>Sabana</h2>
                        <h4>Hei what's up, i know you'll be back</h4>
                    </div>
                    <div className="login-group">
                        <button type="submit" className="btn-auth">
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google"/>
                            <span className="tw_text-lg tw_font-semibold">
                                Google
                            </span>
                        </button>
                        <button type="submit" className="btn-auth">
                            <img src="https://img.icons8.com/fluency/48/000000/github.png" alt="github"/>
                            <span className="tw_text-lg tw_font-semibold">
                                Github
                            </span>
                        </button>
                        <button id="email" name="email" type="submit" className="btn-auth" onClick={() => showCloseModal({name: "email"})}>
                            <span className="tw_text-lg tw_font-semibold">
                                Sign in with your email
                            </span>
                        </button>
                    </div>
                    <div className="widget-signup">
                        <div>Don't have an account? <Link to="/register">Sign up</Link></div>
                    </div>
                </div>
            </div>
            <ModalEmail visible={modal.email} onClose={() => showCloseModal({name: "email"})} />
            <footer className="footer-auth">
                <a href="https://me.nanali.co" target="_blank" rel="noopener noreferrer">about</a>
            </footer>
        </div>
    )
}

Login.propTypes = {
    props: PropTypes.any
}

interface EmailProps  {
    visible: boolean,
    onClose: () => void
}
const ModalEmail = (props: EmailProps) => {
    const { visible, onClose } = props
    const [body, setBody] = useState({
        username: null,
        password: null
    })
    function onHandleChange(event:any){
        const { name, value } = event.target
        setBody(prevState => ({...prevState, [name]: value}))
    }

    function handleSubmit(event:any){
        event.preventDefault()
        LoginController({body: body}).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);            
        })
    }
    return (
        <Modal 
            open={visible} 
            onClose={onClose} 
            useFooter={false} 
            useHeader={false}
        >
            <div className="inner__register">
                <form onSubmit={handleSubmit}>
                    <div className="tw_flex tw_items-center tw_mt-4 tw_relative tw_pl-2 tw_pr-2">
                        <div className="icon_form">
                            <img alt="user" src="https://img.icons8.com/doodle/48/000000/user.png"/>
                        </div>
                        <input onChange={onHandleChange} type="text" name="username" placeholder="Username" className="field-input focus:tw_ring-indigo-500 focus:tw_border-indigo-500 tw_block tw_w-full tw_pl-9 tw_pr-12 xs:tw_text-sm tw_border-gray-500 tw_rounded-md tw_border" />
                    </div>
                    <div className="tw_flex tw_items-center tw_mt-4 tw_relative tw_pl-2 tw_pr-2">
                        <div className="icon_form">
                            <img alt="password" src="https://img.icons8.com/office/40/000000/key.png"/>
                        </div>
                        <input onChange={onHandleChange}  type="password" name="password" placeholder="Password" className="field-input focus:tw_ring-indigo-500 focus:tw_border-indigo-500 tw_block tw_w-full tw_pl-9 tw_pr-12 xs:tw_text-sm tw_border-gray-500 tw_rounded-md tw_border" />
                    </div>
                    <div className="tw_fixed tw_bottom-0 tw_right-0 tw_left-0 tw_flex tw_justify-center  tw_pb-3">
                        <button type="submit" className="btn btn-register">Login</button>
                    </div>
                </form>
                <div className="notification-error tw_mt-4 tw_p-4">
                    <div className="inner_error"></div>
                </div>
            </div>
        </Modal>
    )
}
export default Login
