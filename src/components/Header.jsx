import '../styles/Header.css';

export default function Header({ showFavorites, onToggleFavorites, favoritesCount }) {
  return (
    <header className="header">
      <h1>🐕 Dog Gallery 🐕</h1>
      <button onClick={onToggleFavorites}>
        {showFavorites ? 'See Gallery' : `See Favorites (${favoritesCount})`}
      </button>
    </header>
  );
}