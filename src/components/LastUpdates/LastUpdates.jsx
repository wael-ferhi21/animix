import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimeCard from '../Animes/AnimeCard';
import { getSeasonalAnimes } from '../../services/api';

function LastUpdates() {
  const [seasonalAnimes,setSeasonalAnimes]=useState([]);
  const [loading, setloading] = useState(false)
  const Current = async () => {
    setloading(true)
    const result = await getSeasonalAnimes()
    setSeasonalAnimes(result)
    setloading(false);
  };
  useEffect(()=>{
    
   Current();

  },[])
  return (
    <div className='grid'>
    { loading ? <div className="loader-container">
      <div className="spinner"></div>
    </div>: 
    seasonalAnimes && seasonalAnimes?.map((seasonal,key) => (
      <Link key={key} to={`anime/${seasonal.mal_id}`}>
      <AnimeCard  element={seasonal}  /> 
      </Link>
    ))}
  </div>
  );
}

export default LastUpdates