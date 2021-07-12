import React, {useState, useEffect} from 'react'
import BookBox from './BookBox'
import request from 'superagent'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function BookCategoryList({categoryList}) {
    const [books, setBooks] = useState([]);

    function getBooks(query) {
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({q: query, filter: 'paid-ebooks', projection: 'lite'})
            .then((data) => {
                setBooks([...data.body.items])
            })
    }
    
    useEffect(() => {
        getBooks(categoryList);
    }, [])

    return (
        <>  
        <Carousel plugins={['infinite', 'arrows', {resolve: slidesToShowPlugin, options: {numberOfSlides: 5, offset: 20}}]}> 
        {
            books.map(book => {
                return <BookBox key={book.id} details={book.volumeInfo} />
            })
        }
        </Carousel>
        </>
    )
}
