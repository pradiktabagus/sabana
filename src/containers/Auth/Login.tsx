import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from "react-router-dom"
import "./index.css"
import Modal from '../../components/modal'
import LoadingIndicator from "../../components/loading/Loading"
import { LoginController, WhoMe } from '../../api/controller/authController'
import Footer from './Footer'
import ButtonAuth from '../../components/auth/ButtonAuth'
import { useForm } from "react-hook-form"
import { HelperConstanta } from '../../helper/constanta'
import { useDispatch,  } from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators,  } from '../../state';
function Login(props: any) {
    const [modal, setModal] = useState({
        email: false
    })

const LoginType = [
    {name: "Google", imgSrc: "https://img.icons8.com/color/48/000000/google-logo.png", type: 'submit', onClick: undefined, id: 'google'},
    {name: "Github", imgSrc: "https://img.icons8.com/fluency/48/000000/github.png", type: 'submit', onClick: undefined, id: 'github'},
    {name: "Sign in with your email", type: 'submit', onClick: () => showCloseModal({name: "email"}), id: 'email'},
]
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
                        {LoginType.map(btn => (
                            <ButtonAuth 
                                name={btn.name} 
                                id={btn.id} 
                                onClick={btn.onClick} 
                                img={btn.imgSrc}
                            />
                        ))}
                    </div>
                    <div className="widget-signup">
                        <div>Don't have an account? <Link to="/register">Sign up</Link></div>
                    </div>
                </div>
            </div>
            <ModalEmail visible={modal.email} onClose={() => showCloseModal({name: "email"})} />
            <Footer />
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
    const dispatch = useDispatch()
    const { CurrentUser } = bindActionCreators(actionCreators, dispatch)
    const [isSuccess, setSuccess] = useState(false)
    const [isVisible, setVisible] = useState(false)
    const [error, setError] = useState([])
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const { register, handleSubmit, formState: {errors} } = useForm()

    useEffect(() => {
        let mount = true
        if(mount){
            setVisible(visible)
            if(!visible){
                setError([])
            }
        }
        return () => {
            mount = false
        }
    }, [visible])


    function onSubmit(body:any){
        try {
            setLoading(true)
            setError([])
            LoginController({body: body}).then(response => {
                const {data} = response
                localStorage.setItem(HelperConstanta.jwt_token, data.token)
            }).then(() => {
               CurrentUser({
                   isLogin: true
               })
               setSuccess(true)
            }).catch(err => {
                const {error} = err
                setError(error)     
            }).finally(() => setLoading(false))
        } catch (error) {
            console.log(error);
        }
        
    }
    return isSuccess 
        ? <Redirect to="/" />
        : (
        <Modal 
            open={isVisible} 
            onClose={onClose} 
            useFooter={false} 
            useHeader={false}
        >
            <div className="inner__register">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="tw_flex tw_items-center tw_mt-4 tw_relative tw_pl-2 tw_pr-2">
                        <div className="icon_form">
                            <img alt="user" src="https://img.icons8.com/doodle/48/000000/user.png"/>
                        </div>
                        <input 
                            {...register('username', {
                                required: 'Username cannot be empty'
                            })}  
                            type="text" name="username" placeholder="Username" 
                            className="field-input focus:tw_ring-indigo-500 focus:tw_border-indigo-500 tw_block tw_w-full tw_pl-9 tw_pr-12 xs:tw_text-sm tw_border-gray-500 tw_rounded-md tw_border" />
                    </div>
                    <div className="tw_flex tw_items-center tw_mt-4 tw_relative tw_pl-2 tw_pr-2">
                        <div className="icon_form">
                            <img alt="password" src="https://img.icons8.com/office/40/000000/key.png"/>
                        </div>
                        <input 
                            {...register('password', {
                                required: 'Password cannot be blank'
                            })}  
                            type="password" name="password" placeholder="Password" 
                            className="field-input focus:tw_ring-indigo-500 focus:tw_border-indigo-500 tw_block tw_w-full tw_pl-9 tw_pr-12 xs:tw_text-sm tw_border-gray-500 tw_rounded-md tw_border" />
                    </div>
                    {!loading && (
                            <div className="tw_fixed tw_bottom-0 tw_right-0 tw_left-0 tw_flex tw_justify-center  tw_pb-3">
                                <button type="submit" className="btn btn-register">Login</button>
                            </div>
                        )
                    }
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
export default Login
