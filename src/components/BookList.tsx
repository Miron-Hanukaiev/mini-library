// Component responsible for rendering book cards list

import { BookListProps } from "../types";
import { useState, useEffect } from "react";

const BookList = ( {books, showOnlyFavorites} : BookListProps) => {
    const [favorites, setFavorites] = useState<string[]>([]);

    // Reading all of the data from the local storage when the app loads
    useEffect(() => {
        const saved = localStorage.getItem("favorites");
        if (saved) setFavorites(JSON.parse(saved));
    }, []);

    // Toggle favorite: add/remove book ID in localStorage with a component state
    const changeStatus = (id:string) => {
        let updatedFavorites: string[];

        // If the id of the book is inside the favorites we will remove him
        if(favorites && favorites.includes(id)) {
            updatedFavorites = favorites.filter(e => e !== id);
        }
        // If the id of the book isn't inside the favorites we will add him
        else {
            updatedFavorites = [...favorites, id];
        }

        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    }

    // If the switch has turned on, we will show only the favorites books, else we will show all of them regardless
    const visibleBooks = showOnlyFavorites ? books.filter(book => favorites.includes(book.id)) : books;

    return (    
        <div className="book-list">
            {visibleBooks.length === 0 && <div>No books match your filters.</div>} 
            {visibleBooks.length !== 0 && visibleBooks.map((book) => (
                <div key={book.id} className="book-card">
                    <h2>{book.title}</h2>
                    <p>Author: {book.author}</p>
                    <p>Year: {book.year}</p>
                    <p>Rating: {book.rating} / 5</p>
                    <p>Tags: {book.tags.join(", ")}</p>
                    <p>{book.description}</p>
                    
                    <button className="fav-toggle"
                            onClick={() => changeStatus(book["id"])}>
                        {favorites && favorites.includes(book.id) ? "Remove Favorite" : "Add Favorite"}
                        {!favorites && "Add Favorite"}
                    </button>
                </div>
            ))}
        </div>
    );
}
 
export default BookList;