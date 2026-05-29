import { useState, useEffect } from 'react';
import { useFavorites } from './hooks/useFavorites.js';
import Header from './components/Header.jsx';
import DogGallery from './components/DogGallery.jsx';
import FavoritesGallery from './components/FavoritesGallery.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';
import './styles/main.css';
import Footer from './components/Footer.jsx';

export default function App() {
  const apiKey = import.meta.env.VITE_DOG_API_KEY;

  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);

  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  // Fetch inicial de perros
  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.thedogapi.com/v1/images/search?limit=10&api_key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setDogs(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching dogs:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header
        showFavorites={showFavorites}
        onToggleFavorites={() => setShowFavorites(!showFavorites)}
        favoritesCount={favorites.length}
      />
      {error && <ErrorMessage message={error} />}
      {loading && <LoadingSpinner />}

      {!loading && !error && (
        showFavorites ? (
          <FavoritesGallery
            favorites={favorites}
            onRemoveFavorite={removeFavorite}
          />
        ) : (
          <DogGallery
            dogs={dogs}
            isFavorite={isFavorite}
            onAddFavorite={addFavorite}
            onRemoveFavorite={removeFavorite}
          />
        )
      )
      }
      < Footer />
    </div >
  );
}


