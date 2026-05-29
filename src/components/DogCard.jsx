import '../styles/DogCard.css';

export default function DogCard({ dog, isFavorite, onAddFavorite, onRemoveFavorite }) {
  return (
    <div className="dog-card">
      <img src={dog.url} alt={`Dog ${dog.id}`} style={{ width: '500px', height: '400px', objectFit: 'contain' }} />
      <button onClick={() => (isFavorite(dog.id) ? onRemoveFavorite(dog.id) : onAddFavorite(dog))}>
        {isFavorite(dog.id) ? '❤️ Favorite' : '🤍 No Favorite'}
      </button>
    </div>
  );
}