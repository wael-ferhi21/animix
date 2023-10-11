import React, { useEffect, useState } from 'react'
import { AnimeCall } from '../../services/api'
import AnimeCard from './AnimeCard'
import { Link } from 'react-router-dom'

function Animes() {
  const [animeList, setAnimeData] = useState([]);
  const [load, setload] = useState(false);
  
  useEffect(() => {
    const AnimeData = async () => {
      setload(true)
      const result = await AnimeCall()
      setAnimeData(result)
      setload(false)
    };
    AnimeData();
  }, [])

  return (
    <div className='grid'>
      { load ?   <div className="loader-container">
        <div className="spinner"></div>
      </div> :
      animeList && animeList?.map((anime, key) => (
        <Link key={key} to={`anime/${anime.mal_id}`}>
          <AnimeCard  element={anime}  /> 
        </Link>
      ))}
    </div>
  );
}

export default Animes



