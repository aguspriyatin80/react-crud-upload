import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Book = () => {
    const [data, setData] = useState({ books: [] })

    useEffect(() => {
        axios.get('http://localhost:4000/book')
            .then(res => {
                setData({ books: res.data.data });
            })
    }, [])
    return (
        <div>
            {
                data.books.map((item, index) => (
                    <div>
                    <h1 key={index}>
                        <a href={item.bookImage}>{item.title}</a>                        
                    </h1>
                    <img src={item.bookImage}/>
                    </div>
                ))
            }
        </div>
    );
}

export default Book
