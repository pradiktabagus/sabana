import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import "./index.css"
import { Editor } from '@tinymce/tinymce-react'
import { HelperConstanta } from '../../helper/constanta'
function Index(props: any) {
    const editorRef = useRef(null)
    const EditorChange = (e:any) => {
        const {value} = e.target
        console.log(value)
    }
    return (
        <div className="post-page">
            <div className="post-header">
                <div className="tw_text-xl tw_text-gray-500">draft</div>
                <button type="button" className="tw_bg-green-500 tw_px-5 tw_py-1 tw_rounded tw_text-white">Saved</button>
            </div>
            <div className="editor-section">
                <input type="text" className="title-story tw_m-1.5 tw_mb-2 tw_w-full tw_bg-transparent tw_text-3xl sm:tw_text-lg lg:tw_text-3xl tw_placeholder-gray-400" placeholder="Title story &#9997;" />
                <div className="tw_m-1.5">
                    <Editor 
                        apiKey={HelperConstanta.apiKey_tinymce}
                        ref={editorRef}
                        inline={true}
                        onChange={EditorChange}
                        initialValue="<p>Tell me your story...</p>"
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:1rem }'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

Index.propTypes = {
    props: PropTypes.any
}

export default Index
