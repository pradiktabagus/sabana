import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import "./index.css"
import { Editor } from '@tinymce/tinymce-react'
import { HelperConstanta } from '../../helper/constanta'
import { PostArticle } from '../../api/controller/articleController'
function Index(props: any) {
    const editorRef =  useRef<any|null>(null);
    const [title, setTitle] = useState<String>("")
    const [content, setContent] = useState("<div></div>")
    const [loading, setLoading] = useState(false)
    const EditorChange = (content:any) => {
        setContent(content)
    }
    const handleSave = (e:any) => {
        e.preventDefault()
        const body = {
           title: title,
           content: content
        }
        setLoading(true)
        PostArticle({ body }).then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
        }).finally(() => setLoading(false))
    }
    return (
        <div className="post-page">
            <div className="post-header">
                <div className="tw_text-xl tw_text-gray-500">draft</div>
                <button onClick={handleSave} type="button" className="tw_bg-green-500 tw_px-5 tw_py-1 tw_rounded tw_text-white">Saved</button>
            </div>
            <div className="editor-section">
                <input onChange={(e) => setTitle(e.target.value)}  name="title" type="text" className="title-story tw_m-1.5 tw_mb-2 tw_w-full tw_bg-transparent tw_text-3xl sm:tw_text-lg lg:tw_text-3xl tw_placeholder-gray-400 focus:tw_outline-1 focus:tw_outline-green-500" placeholder="Title story &#9997;" />
                <div className="tw_m-1.5 editor">
                    <Editor
                        apiKey={HelperConstanta.apiKey_tinymce}
                        onInit={(e, editor) => editorRef.current = editor}
                        inline={true}
                        onEditorChange={EditorChange}
                        value={content}
                        init={{
                            className: "editor",
                            allow_html_data_urls: true,
                            skin: "outside",
                            placeholder: "Tell me your story...",
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
