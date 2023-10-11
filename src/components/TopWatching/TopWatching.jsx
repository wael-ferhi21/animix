import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { TopAnime } from '../../services/api'
import AnimeCard from '../Animes/AnimeCard'



function TopWatching(props) {
  const [topAnime,setTopAnime]=useState([]);
  const [loading, setloading] = useState(false)
  const TopAnimes = async () => {
    setloading(true)
    const result = await TopAnime()
    setTopAnime(result)
    setloading(false);
  };
  useEffect(()=>{
    
     TopAnimes();

  },[])
  return (
    <div className='grid'>
      { loading ? <div className="loader-container">
        <div className="spinner"></div>
      </div>: 
      topAnime && topAnime?.map((top,key) => (
        <Link key={key} to={`anime/${top.mal_id}`}>
        <AnimeCard  element={top}  /> 
        </Link>
      ))}
    </div>
  );
}

export default TopWatching