import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('dogFavorites');
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error('Error al cargar favoritos:', error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('dogFavorites', JSON.stringify(favorites));
  }, [favorites]);

  // Sincroniza favoritos entre pestañas del navegador
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key !== 'dogFavorites') return;

      if (!event.newValue) {
        setFavorites([]);
        return;
      }

      try {
        const parsed = JSON.parse(event.newValue);
        setFavorites(Array.isArray(parsed) ? parsed : []);
      } catch (error) {
        console.error('Error sincronizando favoritos:', error);
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

  const clearFavorites = () => {
    setFavorites([]);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    clearFavorites,
    isFavorite,
  };
}
