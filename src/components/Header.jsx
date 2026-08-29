import '../styles/Header.css';

export default function Header({ showFavorites, onToggleFavorites, favoritesCount }) {
  return (
    <header className="header">
      <div className="header__brand">
        <h1>Paws & Woofs</h1>
        <p>A small gallery of very good dogs</p>
      </div>
      <nav className="header__nav" aria-label="Gallery views">
        <button
          type="button"
          className={!showFavorites ? 'is-active' : ''}
          onClick={() => showFavorites && onToggleFavorites()}
        >
          Gallery
        </button>
        <button
          type="button"
          className={showFavorites ? 'is-active' : ''}
          onClick={() => !showFavorites && onToggleFavorites()}
        >
          Favorites
          {favoritesCount > 0 && (
            <span className="header__badge">{favoritesCount}</span>
          )}
        </button>
      </nav>
    </header>
  );
}
