import DogCard from './DogCard.jsx';
import '../styles/DogGallery.css';

export default function DogGallery({ dogs, isFavorite, onAddFavorite, onRemoveFavorite }) {
  return (
    <div className="dog-gallery">
      <p id="primero">Have a look and choose your favorites - {dogs.length} dogs loaded</p>
      {dogs.map((dog) => (
        <DogCard
          key={dog.id}
          dog={dog}
          isFavorite={isFavorite}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
        />
      ))}
    </div>
  );
}