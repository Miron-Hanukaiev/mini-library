// Component responsible for showing the sorting options

import {BookSort} from "../types";

const Sort = ({ titleSort, setTitleSort, ratingSort, setRatingSort }: BookSort) => {
    return ( 
            <div className="sort-card">
                <form> 
                    <div className="sort-section">
                        <label>A→Z</label>
                        <input
                            type="radio"
                            name="titleSort"
                            value="A to Z"
                            checked={titleSort === "A to Z"}
                            onChange={(e) => setTitleSort("A to Z")} 
                        />

                        <label>Z→A</label>
                        <input
                            type="radio"
                            name="titleSort"
                            value="Z to A"
                            checked={titleSort === "Z to A"}
                            onChange={(e) => setTitleSort("Z to A")}
                        />
                    </div>
                    
                    <div className="sort-section">
                        <label>high→low</label>
                        <input
                            type="radio"
                            name="ratingSort"
                            value="high to low"
                            checked={ratingSort === "high to low"}
                            onChange={(e) => setRatingSort("high to low")}
                        />
        
                        <label>low→high</label>
                        <input
                            type="radio"
                            name="ratingSort"
                            value="low to high"
                            checked={ratingSort === "low to high"}
                            onChange={(e) => setRatingSort("low to high")}
                        />
                    </div>
                    
                </form>
            </div> 
     );
}
 
export default Sort;