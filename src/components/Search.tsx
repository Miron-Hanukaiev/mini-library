// Component responsible for showing the sorting options

import { BookSortProps } from '../types';

const Sort = ({
    titleSort,
    setTitleSort,
    ratingSort,
    setRatingSort,
}: BookSortProps) => {
    return (
        <div className="sort-card">
            <form>
                <div className="sort-section">
                    <input
                        type="radio"
                        name="sort"
                        value="A to Z"
                        checked={titleSort === 'A to Z'}
                        onChange={() => {
                            setTitleSort('A to Z');
                            setRatingSort('none');
                        }}
                    />
                    <label>A→Z</label>

                    <input
                        type="radio"
                        name="sort"
                        value="Z to A"
                        checked={titleSort === 'Z to A'}
                        onChange={() => {
                            setTitleSort('Z to A');
                            setRatingSort('none');
                        }}
                    />
                    <label>Z→A</label>
                    <input
                        type="radio"
                        name="sort"
                        value="high to low"
                        checked={ratingSort === 'high to low'}
                        onChange={() => {
                            setRatingSort('high to low');
                            setTitleSort('none');
                        }}
                    />
                    <label>high→low</label>

                    <input
                        type="radio"
                        name="sort"
                        value="low to high"
                        checked={ratingSort === 'low to high'}
                        onChange={() => {
                            setRatingSort('low to high');
                            setTitleSort('none');
                        }}
                    />
                    <label>low→high</label>
                </div>
            </form>
        </div>
    );
};

export default Sort;