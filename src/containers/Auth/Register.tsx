import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from "react-router-dom"
import Modal from '../../components/modal'
import { RegisterController } from '../../api/controller/authController'
import LoadingIndicator from "../../components/loading/Loading"
import "./index.css"
function Register(props: any) {
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
                        <h4>Let's join us</h4>
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
                        <button type="submit" className="btn-auth" onClick={()=> showCloseModal({name: "email"})}>
                            <span className="tw_text-lg tw_font-semibold">
                                Sign up with your email
                            </span>
                        </button>
                    </div>
                    <div className="widget-signup">
                        <p>By signing up, you agree to the Term of Service and Privacy Policy, including Cookie use</p>
                        <div>Already have an account? <Link to="/login">Sign in</Link></div>
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

Register.propTypes = {
    props: PropTypes.any
}
export default Register

interface ModalProps {
    visible: boolean
    onClose: () => void
}
const ModalEmail = (props: ModalProps) => {
    const { visible, onClose } = props
    const [isRegistered, setRegistered] = useState(false)
    const [body, setBody] = useState({
        email: null,
        username: null,
        password: null
    })
    const [ loading, setLoading ] = useState(false)
    const [error, setError] = useState([])
    function onHandleChange(event:any){
        const { name, value } = event.target
        setBody(prevState => ({...prevState, [name]: value}))
    }

    function handleSubmit(event:any){
        event.preventDefault()
        setLoading(true)
        try {
            RegisterController({body}).then(response => {
                setRegistered(true)
            }).then(() => onClose()).catch(err => {
                const {error} = err
                setError(error)
            }).finally(() => setLoading(false));
        } catch (error) {
            console.log(error);
        }
    }

    return isRegistered 
    ? <Redirect to="/login" /> 
    :(
        <Modal
            open={visible} 
            onClose={onClose} 
            useFooter={false} 
            useHeader={false}
        >
            <div className="inner__register">
                <form onSubmit={handleSubmit} className="tw_relative">
                    <div className="tw_flex tw_items-center tw_mt-4 tw_relative tw_pl-2 tw_pr-2">
                        <div className="icon_form">
                            <img alt="user" src="https://img.icons8.com/doodle/48/000000/user.png"/>
                        </div>
                        <input onChange={onHandleChange} type="text" name="username" placeholder="Username" className="field-input focus:tw_ring-indigo-500 focus:tw_border-indigo-500 tw_block tw_w-full tw_pl-9 tw_pr-12 xs:tw_text-sm tw_border-gray-500 tw_rounded-md tw_border" />
                    </div>
                    <div className="tw_flex tw_items-center tw_mt-4 tw_relative tw_pl-2 tw_pr-2">
                        <div className="icon_form">
                            <img alt="email" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-cyber-security-kiranshastry-lineal-color-kiranshastry-1.png"/>
                        </div>
                        <input onChange={onHandleChange} type="email" name="email" placeholder="Email" className="field-input focus:tw_ring-indigo-500 focus:tw_border-indigo-500 tw_block tw_w-full tw_pl-9 tw_pr-12 xs:tw_text-sm tw_border-gray-500 tw_rounded-md tw_border" />
                    </div>
                    <div className="tw_flex tw_items-center tw_mt-4 tw_relative tw_pl-2 tw_pr-2">
                        <div className="icon_form">
                            <img alt="password" src="https://img.icons8.com/office/40/000000/key.png"/>
                        </div>
                        <input onChange={onHandleChange} type="password" name="password" placeholder="Password" className="field-input focus:tw_ring-indigo-500 focus:tw_border-indigo-500 tw_block tw_w-full tw_pl-9 tw_pr-12 xs:tw_text-sm tw_border-gray-500 tw_rounded-md tw_border" />
                    </div>
                    <div className="tw_fixed tw_bottom-0 tw_right-0 tw_left-0 tw_flex tw_justify-center tw_pb-3">
                        <button type="submit" className="btn btn-register">Register</button>
                    </div>
                </form>
                {loading 
                    ? (
                        <div className="tw_w-full tw_flex tw_justify-center">
                            <LoadingIndicator />
                        </div> 
                    )
                    : (
                        <div className="notification-error tw_mt-4 tw_p-4">
                            <div className="inner_error">
                                <ul>
                                    {error?.map((err: any) => (
                                        <li>{err.message}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                }      
            </div>
        </Modal>
    )
}
