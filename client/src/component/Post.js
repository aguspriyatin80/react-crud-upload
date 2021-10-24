import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Post = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/posts')
            .then(res => {
                setData(res.data.data);
                console.log(res.data)
            })
    }, [])
    return (
        <div>
            {
                data.length ?
                    data.map((item, index) => (
                        <div key={index}>
                            <h1>
                                <a href={item.postImage}>{item.title}</a>
                            </h1>
                            <img src={item.postImage} />
                        </div>
                    ))
                    : null
            }
        </div>
    );
}

export default Post
