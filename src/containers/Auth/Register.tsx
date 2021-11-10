import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from "react-router-dom"
import Modal from '../../components/modal'
import { RegisterController } from '../../api/controller/authController'
import LoadingIndicator from "../../components/loading/Loading"
import { useForm } from "react-hook-form"
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
    const [ loading, setLoading ] = useState(false)
    const [error, setError] = useState([])
    const { register, handleSubmit, formState: {errors} } = useForm()

    function onSubmit(body:any) {
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

    const handleEmailValidation = (email: string) => {
        // eslint-disable-next-line no-useless-escape
        const isValidEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        return isValidEmail
    }

    useEffect(() => {
        if(Object.keys(errors).length !== 0){
            //TODO handle error
            console.error(errors);
        }
    }, [errors])

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
                <form onSubmit={handleSubmit(onSubmit)} className="tw_relative">
                    <div className="tw_flex tw_items-center tw_mt-4 tw_relative tw_pl-2 tw_pr-2">
                        <div className="icon_form">
                            <img alt="user" src="https://img.icons8.com/doodle/48/000000/user.png"/>
                        </div>
                        {/* <input onChange={onHandleChange} type="text" name="username" placeholder="Username" className="field-input focus:tw_ring-indigo-500 focus:tw_border-indigo-500 tw_block tw_w-full tw_pl-9 tw_pr-12 xs:tw_text-sm tw_border-gray-500 tw_rounded-md tw_border" /> */}
                        <input 
                            {...register('username', {
                                required: "Username cannot be empty",
                                minLength: {
                                    value: 6,
                                    message: "Minimal 6 characters"
                                }
                            })} 
                            placeholder="Username" 
                            className="field-input focus:tw_ring-indigo-500 focus:tw_border-indigo-500 tw_block tw_w-full tw_pl-9 tw_pr-12 xs:tw_text-sm tw_border-gray-500 tw_rounded-md tw_border" />
                    </div>
                    <div className="tw_flex tw_items-center tw_mt-4 tw_relative tw_pl-2 tw_pr-2">
                        <div className="icon_form">
                            <img alt="email" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-cyber-security-kiranshastry-lineal-color-kiranshastry-1.png"/>
                        </div>
                        {/* <input onChange={onHandleChange} type="email" name="email" placeholder="Email" className="field-input focus:tw_ring-indigo-500 focus:tw_border-indigo-500 tw_block tw_w-full tw_pl-9 tw_pr-12 xs:tw_text-sm tw_border-gray-500 tw_rounded-md tw_border" /> */}
                        <input 
                            {...register('email', {
                                required: 'Email cannot be empty',
                                validate: handleEmailValidation
                            })} 
                            placeholder="Email" 
                            className="field-input focus:tw_ring-indigo-500 focus:tw_border-indigo-500 tw_block tw_w-full tw_pl-9 tw_pr-12 xs:tw_text-sm tw_border-gray-500 tw_rounded-md tw_border" />
                    </div>
                    <div className="tw_flex tw_items-center tw_mt-4 tw_relative tw_pl-2 tw_pr-2">
                        <div className="icon_form">
                            <img alt="password" src="https://img.icons8.com/office/40/000000/key.png"/>
                        </div>
                        {/* <input onChange={onHandleChange} type="password" name="password" placeholder="Password" className="field-input focus:tw_ring-indigo-500 focus:tw_border-indigo-500 tw_block tw_w-full tw_pl-9 tw_pr-12 xs:tw_text-sm tw_border-gray-500 tw_rounded-md tw_border" /> */}
                        <input  
                            {...register('password', {
                                required: true,
                                minLength: {
                                    value: 6,
                                    message: "Minimal 6 characters"
                                }
                            })}
                            type="password" 
                            placeholder="Password" 
                            className="field-input focus:tw_ring-indigo-500 focus:tw_border-indigo-500 tw_block tw_w-full tw_pl-9 tw_pr-12 xs:tw_text-sm tw_border-gray-500 tw_rounded-md tw_border" />
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
