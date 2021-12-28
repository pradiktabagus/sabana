import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import "./index.css"
import { getProfile } from '../../api/controller/profileController'
import { useParams } from "react-router-dom"

interface userProps {
    image: string,
    username: string,
    email: string
}
function Index(props: any) {
    const [ user, setUser] = useState<userProps>()
    let { username }: any = useParams()

    useEffect(() => {
        let mount = true
        if(mount){
            getProfile(username.replace(/@/,'')).then(res => {
                console.log(res);
                const { data } = res
                setUser(data)
            })
        }
        return () => {
            mount = false
        }
    }, [])
    return (
        <div className="profile-page">
            <div className="profile-cover">
                <div className="profile-banner tw_pt-14 tw_p-3 tw_text-base tw_w-full">
                    <div className="profile-header tw_shadow-md">
                        <div className="profile-information tw_px-4">
                            <span className="profile-figure">
                                <img className="profile-picture" src={user?.image} alt="profile" />
                            </span>
                            <button className="btn_edit-profile tw_rounded tw_absolute tw_bottom-0 tw_right-0 tw_p-2 tw_px-4">Edit Profil</button>
                        </div>
                        <div className="profile-detail tw_p-6">
                            <h1 className="tw_text-3xl tw_font-bold tw_mb-2">{user?.username}</h1>
                            <p className="tw_text-base tw_font-mono tw_text-gray-500 tw_mb-4">#bio</p>
                            <div className="tw_flex social-media-meta tw_flex-wrap tw_py-2">
                                <span className="social-meta-item tw-font-mono tw_text-gray-600 tw_text-sm">
                                    <img src="https://img.icons8.com/ios-filled/50/000000/pin--v2.png" alt="pin"/>
                                    Samin
                                </span>
                                <span className="social-meta-item tw-font-mono tw_text-gray-600 tw_text-sm">
                                    <img src="https://img.icons8.com/ios-filled/50/000000/new-post.png" alt="mail"/>
                                    {user?.email}
                                </span> 
                                <span className="social-meta-item tw-font-mono tw_text-gray-600 tw_text-sm">
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/internet--v1.png" alt="website"/>
                                    nanali.co
                                </span>
                            </div>
                        </div>
                        <div className="profile-work tw_pt-4 tw_text-center tw_border-t-2">
                            <h4 className="tw_text-sm tw_font-semibold">Activity</h4>
                            <h3 className="tw_text-base tw_font-normal tw_text-gray-500 tw_font-mono">Home Brewer</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Index.propTypes = {
    props: PropTypes.any
}

export default Index
