// Parent component that loads book data and passes it to BookList

import BookList from "./BookList";
import useFetch from "./useFetch";
import Search from "./Search"
import {useState} from "react";

const Library = () => {
    const{data: books, isLoading, error} = useFetch("/books.json");

    // State for search input and selected search type
    const [searchText, setSearchText] = useState("");
    const [searchBy, setSearchBy] = useState<"title" | "author">("title");

    const filteredBooks = () => {
        if(!books) return null;

        // Filter books will be insensitive search
        return books.filter(book =>
            book[searchBy]
            .toLowerCase()
            .includes(searchText.toLowerCase())
    );
    
    } 

    return (
        <div className="library"> 
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {books && <Search
                            searchText={searchText}
                            searchBy={searchBy}
                            setSearchText={setSearchText}
                            setSearchBy={setSearchBy}
                             />}
            {books && <BookList books={filteredBooks() ?? [] } />}
        </div>
    );

 
};
export default Library;