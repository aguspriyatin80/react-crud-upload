import React, { useState } from 'react'
import axios from 'axios'
const Blog = (img) => {
    const [title, setTitle] = useState('')
    const [postImage, setPostImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const handleClickSubmit = (e) => {
        e.preventDefault()
        console.log('title', title)

        console.log(postImage.name)

        const data = new FormData();
        data.append('title', title)
        // data.append('imgPreview', imgPreview)

        data.append('postImage', postImage)
        axios
            .post('http://localhost:4000/posts', data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then(res => {
                console.log('post success', res)
            })
            .catch(err => {
                console.log('err', err)
            })
    }
    const onImageUpload = (e) => {
        const file = e.target.files[0]
        setPostImage(file)


        setImagePreview(URL.createObjectURL(file))
        // setImgPreview('test')
        console.log(imagePreview)

    }
    return (
        <div>

            <div>
                <input
                    name="title"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)} />
                <br />

                <input type="file" name="postImage" onChange={e => onImageUpload(e)} img={imagePreview} />
                {img ? <img src={imagePreview} /> : <img src={imagePreview} alt="Preview" />}


            </div>
            <button onClick={handleClickSubmit}>Submit</button>

        </div>
    )
}

export default Blog
