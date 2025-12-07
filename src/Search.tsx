// Component responsible for rendering search form

import { Tag, Rating, SearchProps } from "./types";

const Search = ({text, setText, searchBy, setSearchBy, tag, setTag, rating, setRating} : SearchProps ) => {

    const resetFilter = () => {
        setText("");
        setSearchBy("title");
        setTag("");
        setRating(0);


    }


    return ( 
        <div className="search-book">
            <h2>Please select the search way:</h2>
            <form>
                <label>Search by author/title</label>
                <input
                    type="text"
                    placeholder={`Search by ${searchBy}`}
                    value={text}
                    onChange = {(e) => setText(e.target.value)} />

                <label>Select way to select</label>
                <select id="search-by"
                    value = {searchBy}
                    onChange = {(e) => setSearchBy(e.target.value as "title" | "author")} >
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                </select>

                <label>Select by tag</label>
                <select id="tag-search"
                    value = {tag}
                    onChange = {(e) => setTag(e.target.value as Tag | "")} >
                    <option value="">All Tags</option>
                    <option value="tech">Tech</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="fiction">Fiction</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="history">History</option>
                    <option value="self-help">Self-Help</option>
                    <option value="science">Science</option>
                </select>

                <label>Select minimum rating (0-5)</label>
                <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.5"
                    value= {rating}
                    onChange = {(e) => setRating(Number(e.target.value) as Rating)}>
                </input>
                <label>{rating} rating and above</label>
            </form>

            <div className="filter-menu">
                {text === "" && tag === "" && rating === 0 && <div>No filter applied.</div>}
                {text !== "" && <div>text filter activated</div>}
                {tag !== "" && <div>tag filter activated</div>}
                {rating > 0 && <div>rating filter activated</div>}
                <button onClick={resetFilter}>Reset filter</button>
            </div>
        </div>
     );
}
 
export default Search;