import DogCard from './DogCard.jsx';
import '../styles/DogGallery.css';

export default function FavoritesGallery({ favorites, addFavorite, onRemoveFavorite, onClearFavorites }) {
  const hasFavorites = favorites.length > 0;

  return (
    <div className="dog-gallery">
      <header className="gallery-intro">
        <div>
          <h2>Favorites</h2>
          <p>
            {hasFavorites
              ? `${favorites.length} saved`
              : 'Nothing saved yet'}
          </p>
        </div>
        {hasFavorites && (
          <button
            type="button"
            className="gallery-intro__clear"
            onClick={onClearFavorites}
          >
            Clear all favorites
          </button>
        )}
      </header>
      {favorites.map((dog) => (
        <DogCard
          key={dog.id}
          dog={dog}
          isFavorite={() => true}
          onAddFavorite={addFavorite}
          onRemoveFavorite={onRemoveFavorite}
        />
      ))}
    </div>
  );
}
