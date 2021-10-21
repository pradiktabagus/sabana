import React from 'react'
import PropTypes from 'prop-types'
import "./index.css"
function Articles(props: any) {
    return (
        <div className="article-page">
            <aside className="article-sidebar-left">
                <div className="article-action">
                    <div className="article-action__inner">
                        <button className="article-reacttion">
                            <img className="reaction-icon" src="https://img.icons8.com/external-sbts2018-mixed-sbts2018/58/000000/external-like-social-media-sbts2018-mixed-sbts2018.png" alt="social"/>
                            <span className="reaction-count">0</span>
                        </button>
                        <button className="article-reacttion">
                            <img className="reaction-icon"  src="https://img.icons8.com/pastel-glyph/64/000000/bookmark-documents--v7.png" alt="bookmark"/>
                            <span className="reaction-count">0</span>
                        </button>
                        <button className="article-reacttion">
                            <img className="reaction-icon" src="https://img.icons8.com/small/32/000000/share.png" alt="share" />
                        </button>
                    </div>
                </div>
            </aside>
            <main className="article-layout-content tw_grid tw_gap-4">
                <div className="article-wrapper">
                    <article className="tw_mb-4 article-card">
                        <header className="article-header">
                            <div className="article-cover">
                                <img className="cover-image" src="https://res.cloudinary.com/practicaldev/image/fetch/s--Lz6BEi81--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d236blki96etyd8qwym6.jpg" alt="cover" />
                            </div>
                            <div className="header-article-meta">
                                <div className="tw_flex xs:tw_items-start sm:tw_items-start tw_flex-col xs:tw_flex-row sm:tw_flex-row">
                                    <div className="tw_flex tw_flex-1 tw_mb-5 tw_items-start">
                                        <div className="tw_relative">
                                            <a href="/me">
                                                <img className="tw_rounded-full tw_align-middle" src="https://res.cloudinary.com/practicaldev/image/fetch/s--w5rD8kS9--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/561644/95b85f88-c16f-4b47-8552-b085d58e4362.jpeg" alt="avatar" />
                                            </a>
                                        </div>
                                        <div className="tw_pl-3 tw_flex-1">
                                            <a className="color-link tw_font-bold" href="/me">Uncle muthu</a>
                                            <p className="tw_text-xs tw_text-gray-500">Posted on 21-20-2002 by <a href="/me">nanali.co</a> </p>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="tw_text-3xl md:text-4xl lg:tw_text-5xl tw_font-bold tw_leading-tight tw_mb-2">Learn Programming</h1>
                                <div className="article-tags">
                                    <a href="/tags" className="article-tag">
                                        <span className="prefix-tag">#</span>webdev
                                    </a>
                                    <a href="/tags" className="article-tag">
                                        <span className="prefix-tag">#</span>programming
                                    </a>
                                </div>
                            </div>
                        </header>
                        <div className="article-main">
                            <div className="article-body text-style">
                            Online learning has come a long way in the last few years. There are interactive courses, tons of online tutorials, and one of my personal favorite ways to practice coding is through fun free games!
While a coding game alone probably isn’t going to teach you everything you need to know about coding, these free fun games can be a really incredible way to practice the skills you’re learning.
They are found to be one of the best methods to acquire programming skills while having little to no previous experience. Gamification allows you to learn by playing, which is a distinctive practice to avoid burnout.
So, next, you will find a list of 10 gamified platforms that will make the process of learning programming an exciting journey.
                            </div>
                        </div>
                        <section className="text-padding tw_mb-4 tw_border-t-2 tw_border-0 tw_border-solid tw_border-gray-200">
                            <header className="tw_relative tw_flex tw_justify-between tw_items-center tw_mb-6">
                                <h2 className="article-subtitle">Discussion</h2>
                                <button type="button" className="btn-subscribe">Subscribe</button>
                            </header>
                            <div id="comment-container">
                                <form className="comment-form">
                                    <span className="comment-avatar tw_mr-2 tw_flex-shrink-0">
                                        <img className="avatar-image" src="https://res.cloudinary.com/practicaldev/image/fetch/s--iojfBMVA--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/257580/2a1734b8-b30c-43a8-ac36-f2b618b7d5ae.jpeg" alt="avatar" />
                                    </span>
                                    <div className="comment-form__inner">
                                        <div className="comment-form__field">
                                            <textarea className="comment-textarea" placeholder="Add to the discussion" />
                                        </div>
                                        <div className="comment-form__button tw_mb-4">
                                            <button type="button" className="btn-comment">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </article>
                    <section>section</section>
                </div>
            </main>
            <aside>profile</aside>
        </div>
    )
}

Articles.propTypes = {
    props: PropTypes.any
}

export default Articles
