// Component responsible for showing the active filters

import {FilterProps} from "../types"

const Filters = ( {title, setTitle, searchBy, setSearchBy, tag, setTag, rating, setRating} : FilterProps) => {

    const resetFilters = () => {
        setTitle("");
        setSearchBy("title");
        setTag("");
        setRating(0);
    }

    return ( 
        <div className="filter-menu">
            {title === "" && tag === "" && rating === 0 && <div>No filter applied.</div>}
            {title !== "" && <div>text filter activated</div>}
            {tag !== "" && <div>tag filter activated</div>}
            {rating > 0 && <div>rating filter activated</div>}
            <button onClick={resetFilters}>Reset filter</button>
        </div>
     );
}
 
export default Filters;