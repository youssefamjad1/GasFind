// src/hooks/useStations.js
import { useState, useCallback } from 'react';
import axios from 'axios';

const useStations = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchNearbyStations = useCallback(async (lat, lng) => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(`/api/stations?lat=${lat}&lng=${lng}`);

      if (!response.data || response.data.length === 0) {
        setError('No stations found nearby.');
        setStations([]); // Clear previous data
      } else {
        setStations(response.data);
      }
    } catch (err) {
      setError(err?.response?.data?.message || 'Error fetching nearby stations.');
    } finally {
      setLoading(false);
    }
  }, []); // Empty dependency array = this function won't change every render

  return { stations, fetchNearbyStations, loading, error };
};

export default useStations;
