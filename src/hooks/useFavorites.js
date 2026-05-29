import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('dogFavorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (error) {
        console.error('Error al cargar favoritos:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dogFavorites', JSON.stringify(favorites));
  }, [favorites]);

  // Sincroniza favoritos entre pestañas del navegador
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'dogFavorites' && event.newValue) {
        try {
          setFavorites(JSON.parse(event.newValue));
        } catch (error) {
          console.error('Error sincronizando favoritos:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const addFavorite = (dogData) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === dogData.id);
      if (exists) return prev;
      return [...prev, dogData];
    });
  };

  const removeFavorite = (dogId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== dogId));
  };

  const isFavorite = (dogId) => {
    return favorites.some((fav) => fav.id === dogId);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
}
