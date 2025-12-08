import { FavoriteProps } from "../types";

const Favorites = ({ showOnlyFavorites, setShowOnlyFavorites }: FavoriteProps) => {
    return (
        <div className="toggle-container">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={showOnlyFavorites}
                    onChange={(e) => setShowOnlyFavorites(e.target.checked)}
                />
                <span className="slider"></span>
            </label>

            <span className="toggle-text">
                {showOnlyFavorites ? "Showing Favorites Only" : "Show Favorites Only"}
            </span>
        </div>
    );
};

export default Favorites;