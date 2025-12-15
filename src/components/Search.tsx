// Component responsible for rendering search form

import Filters from "./Filters";
import Sort from "./Sort"
import { Tag, Rating, SearchProps} from "../types";

const Search = ({title, setTitle, searchBy, setSearchBy, tag, setTag, rating, setRating,
                titleSort, setTitleSort, ratingSort, setRatingSort} : SearchProps ) => {

    return ( 
        <div className="search-book">
            <h2>Please enter your filter:</h2>
            <form>
                <label>Search by author/title</label>
                <input
                    type="text"
                    placeholder={`Search by ${searchBy}`}
                    value={title}
                    onChange = {(e) => setTitle(e.target.value)} />

                <label>Select way to select</label>
                <select id="search-by"
                    value = {searchBy}
                    onChange = {(e) => setSearchBy(e.target.value as "title" | "author")} >
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                </select>

                <label>Select by tag</label>
                <select
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
                    value={rating}
                    onChange = {(e) => setRating(Number(e.target.value) as Rating)}>
                </input>
                <label>{rating} rating and above </label>


            </form>

            <Filters
                title={title}
                setTitle={setTitle}
                searchBy={searchBy}
                setSearchBy={setSearchBy}
                tag={tag}
                setTag={setTag}
                rating={rating}
                setRating={setRating} 
            />

            <Sort
                titleSort={titleSort}
                setTitleSort={setTitleSort}
                ratingSort={ratingSort}
                setRatingSort={setRatingSort}
            />
        </div>
     );
}
 
export default Search;
