// Parent component that loads book data and passes it to BookList

import BookList from "./BookList";
import useFetch from "./useFetch";
import Search from "./Search"
import {useState} from "react";
import { Tag, Rating } from "./types";

const Library = () => {
    const{data: books, isLoading, error} = useFetch("/books.json");

    // State for search input and selected search type
    const [text, setText] = useState("");
    const [searchBy, setSearchBy] = useState<"title" | "author">("title");
    const [tag, setTag] = useState<Tag | "">("");
    const [rating, setRating] = useState<Rating>(0);

    const filteredBooks = () => {
        if(!books) return null;

        // Filter books will be insensitive search
        let filtered =  books.filter(book =>
            book[searchBy]
            .toLowerCase()
            .includes(text.toLowerCase()));
        
        // Extending the filter by a tag selection if happened
        if(tag) {
            filtered = filtered.filter(book =>
            book.tags.includes(tag));
        }

        // Expending the filter by a rating, will show rating and above
        if(rating>0) {
            filtered = filtered.filter(book =>
            book.rating >= rating
            )
        }
            return filtered;
    } 

    return (
        <div className="library"> 
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {books && <Search
                            text={text}
                            setText={setText}
                            searchBy={searchBy}
                            setSearchBy={setSearchBy}
                            tag={tag}
                            setTag={setTag}
                            rating={rating}
                            setRating={setRating}
                            />}
            {books && <BookList books={filteredBooks() ?? [] } />}
        </div>
    );

 
};
export default Library;