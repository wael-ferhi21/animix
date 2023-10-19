import React, { useEffect, useState } from 'react';
import { getAnimeById, getAnimeCharacters } from '../../services/api';
import { useParams } from 'react-router-dom';
import '../AnimeDetail/AnimeDetail.css';

function AnimeDetail() {
  const [anime, setSelected] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true); // Changed setloading to setLoading
  const { id } = useParams();

  const AnimeInfo = async () => {
    try {
      const result = await getAnimeById(id);
      setSelected(result);
    } catch (error) {
      console.error('Error fetching anime:', error);
    } finally { 
      setLoading(false);
    }
  };

  const AnimeCharacters = async () => {
    try {
      const result = await getAnimeCharacters(id);
      setCharacters(result);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  useEffect(() => {
    AnimeInfo();
    AnimeCharacters();
  }, [id]);

  return (
    
    <div>
      {loading || !(anime||characters) ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className='anime-container-d'>
          <h1 className='anime-title'>{anime.title}</h1>
          <div className='info'>
            <p className='season'> Season: {anime.season}</p>
            <p className='type'>Type:{anime.type}</p>
            <p className='source'>Source : {anime.source}</p>
            <p className='episodes'> Episodes: {anime.episodes}</p>
            <p className='status'>Status :{anime.status}</p>
            <p className='rating'>Rating: {anime.rating}</p>
            <p className='score'>Score :{anime.score}</p>
          </div>
          <img className='anime-img' src={anime.images?.jpg?.large_image_url} alt="" />
          <div id='label'> Characters :</div>
        <div className="characters-grid">
          {characters && characters?.map((character) => (
              <div id='character-container'>
            <div id='character-info' key={character.id}>
             <img  id='character-img'src={character.character.images?.jpg.image_url} alt={character.name} />
              <p id='charcter-name'> Name:  {character.character.name}</p>
              <p id='character-role'> Role: {character.role}</p>
            </div>
            </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
}

export default AnimeDetail;
