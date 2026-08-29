import DogCard from './DogCard.jsx';
import '../styles/DogGallery.css';

export default function DogGallery({ dogs, isFavorite, onAddFavorite, onRemoveFavorite }) {
  return (
    <div className="dog-gallery">
      <header className="gallery-intro">
        <h2>Gallery</h2>
        <p>{dogs.length} photos</p>
      </header>
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