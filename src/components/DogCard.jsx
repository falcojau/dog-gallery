import '../styles/DogCard.css';

export default function DogCard({ dog, isFavorite, onAddFavorite, onRemoveFavorite }) {
  return (
    <div className="dog-card">
      <div className="dog-card__media">
        <img
          src={dog.url}
          alt={`Dog ${dog.id}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <button onClick={() => (isFavorite(dog.id) ? onRemoveFavorite(dog.id) : onAddFavorite(dog))}>
        {isFavorite(dog.id) ? '❤️ Favorite' : '🤍 No Favorite'}
      </button>
    </div>
  );
}