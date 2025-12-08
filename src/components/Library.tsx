// Parent component that loads book data and passes it to BookList, Search and Favorites

import BookList from "./BookList";
import useFetch from "../hooks/useFetch";
import Search from "./Search"
import {useState} from "react";
import { Tag, Rating, TitleSort, RatingSort } from "../types";
import Favorites from "./Favorites";

const Library = () => {
    const{data: books, isLoading, error} = useFetch("/books.json");

    // State for search input and selected search type
    const [title, setTitle] = useState("");
    const [searchBy, setSearchBy] = useState<"title" | "author">("title");
    const [tag, setTag] = useState<Tag | "">("");
    const [rating, setRating] = useState<Rating>(0);
    const [titleSort, setTitleSort] = useState<TitleSort>("none");
    const [ratingSort, setRatingSort] = useState<RatingSort>("none");
    const [showOnlyFavorites, setShowOnlyFavorites] = useState<boolean>(false);

    // Derived filtering and avoids re-rendering
    const filteredBooks = () => {
        if(!books) return null;

        // Filter books will be insensitive search
        let filtered =  books.filter(book =>
            book[searchBy]
            .toLowerCase()
            .includes(title.toLowerCase()));
        
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

        filtered.sort((a, b) => {
    
            // compare rating first
            if (ratingSort === "low to high") {
                if (a.rating !== b.rating) return a.rating - b.rating;
            } 
            else if (ratingSort === "high to low") {
                if (a.rating !== b.rating) return b.rating - a.rating;
            }

            // if ratings are equal then compare titles
            if (titleSort === "A to Z") {
                return a.title.localeCompare(b.title);
            } 
            else if (titleSort === "Z to A") {
                return b.title.localeCompare(a.title);
            }

            return 0; // the books won't change places
        });

        return filtered;
    } 

    return (
        <div className="library"> 
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {books && <Search
                            title={title}
                            setTitle={setTitle}
                            searchBy={searchBy}
                            setSearchBy={setSearchBy}
                            tag={tag}
                            setTag={setTag}
                            rating={rating}
                            setRating={setRating}
                            titleSort={titleSort}
                            setTitleSort={setTitleSort}
                            ratingSort={ratingSort}
                            setRatingSort={setRatingSort}
                            />}
            {books && <Favorites
                            showOnlyFavorites={showOnlyFavorites}
                            setShowOnlyFavorites={setShowOnlyFavorites} 
                            />}
            {books && <BookList 
                            books={filteredBooks() ?? [] }
                            showOnlyFavorites={showOnlyFavorites} 
                            />}
            

        </div>
    );

 
};
export default Library;