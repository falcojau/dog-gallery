import DogCard from './DogCard.jsx';

export default function FavoritesGallery({ favorites, addFavorite, onRemoveFavorite }) {
  return (
    <div className="favorites-gallery">
      <p>Favorites: {favorites.length}</p>
      {favorites.length === 0 ?
        (
          <p>No favorites yet</p>
        ) : (
          favorites.map((dog) => (
            <DogCard
              key={dog.id}
              dog={dog}
              isFavorite={() => true} // En favoritos, todos son favoritos
              onAddFavorite={addFavorite} // No se usa en favoritos, pero lo pasamos por consistencia
              onRemoveFavorite={onRemoveFavorite} // Pasamos función para eliminar
            />
          ))
        )}
    </div>
  );
}