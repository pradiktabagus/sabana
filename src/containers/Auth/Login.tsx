import React from 'react'
import PropTypes from 'prop-types'
import "./index.css"
function login(props: any) {
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
                        <button type="submit" className="btn-auth">
                            <span className="tw_text-lg tw_font-semibold">
                                Sign in with your email
                            </span>
                        </button>
                    </div>
                    <div className="widget-signup">
                        <div>Don't have an account? Sign up</div>
                    </div>
                </div>
            </div>
            <footer className="footer-auth">
                <a href="https://me.nanali.co" target="_blank" rel="noopener noreferrer">about</a>
            </footer>
        </div>
    )
}

login.propTypes = {
    props: PropTypes.any
}

export default login
