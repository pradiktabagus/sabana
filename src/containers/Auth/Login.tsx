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
                        <button>Google</button>
                        <button>Twitter</button>
                        <button>Github</button>
                    </div>
                    <div className="widget-signup">
                        <p>By signing up, you agree to the Term of Service and Privacy Policy, including Cookie use</p>
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

}

export default login
