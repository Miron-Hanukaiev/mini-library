// Component responsible for rendering book cards list

import { BookListProps } from "./types";
import './index.css';

const BookList = ( {books} : BookListProps) => {

    return (    
        <div className="book-list">
            {books.length === 0 && <div>No books found.</div>} 
            {books.length !== 0 && books.map((book) => (
                <div key={book.id} className="book-card">
                    <h2>{book.title}</h2>
                    <p>Author: {book.author}</p>
                    <p>Year: {book.year}</p>
                    <p>Rating: {book.rating} / 5</p>
                    <p>Tags: {book.tags.join(", ")}</p>
                    <p>{book.description}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BookList;