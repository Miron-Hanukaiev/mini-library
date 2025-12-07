// Component responsible for rendering search form

import { SearchProps } from "./types";

const Search = ({searchText, searchBy, setSearchText, setSearchBy} : SearchProps ) => {

    return ( 
        <div className="search-book">
            <h2>Please select the search way:</h2>
            <form>
                <input
                    type="text"
                    placeholder={`Search by ${searchBy}`}
                    onChange = {(e) => setSearchText(e.target.value)} />
                <select id="search-by"
                    value = {searchBy}
                    onChange = {(e) => setSearchBy(e.target.value as "title" | "author")} >
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                </select>
            </form>
        </div>
     );
}
 
export default Search;