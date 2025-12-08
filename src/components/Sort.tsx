// Component responsible for showing the sorting options

import {BookSortProps} from "../types";

const Sort = ({ titleSort, setTitleSort, ratingSort, setRatingSort }: BookSortProps) => {
    return ( 
            <div className="sort-card">
                <form> 
                    <div className="sort-section">
                        <input
                            type="radio"
                            name="titleSort"
                            value="A to Z"
                            checked={titleSort === "A to Z"}
                            onChange={(e) => setTitleSort("A to Z")} 
                        />
                        <label>A→Z</label>

                        <input
                            type="radio"
                            name="titleSort"
                            value="Z to A"
                            checked={titleSort === "Z to A"}
                            onChange={(e) => setTitleSort("Z to A")}
                        />
                        <label>Z→A</label>
                    </div>
                    
                    <div className="sort-section">
                        <input
                            type="radio"
                            name="ratingSort"
                            value="high to low"
                            checked={ratingSort === "high to low"}
                            onChange={(e) => setRatingSort("high to low")}
                        />
                        <label>high→low</label>
        
                        <input
                            type="radio"
                            name="ratingSort"
                            value="low to high"
                            checked={ratingSort === "low to high"}
                            onChange={(e) => setRatingSort("low to high")}
                        />
                        <label>low→high</label>
                    </div>
                    
                </form>
            </div> 
     );
}
 
export default Sort;