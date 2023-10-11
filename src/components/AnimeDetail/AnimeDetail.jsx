import React, { useEffect, useState } from 'react'
import { getAnimeById, getAnimeCharacters } from '../../services/api';
import { useParams } from 'react-router-dom';
import '../AnimeDetail/AnimeDetail.css'


function AnimeDetail() {
  const [anime,setSelected]=useState({});
  const [characters,setCharacters]=useState([]);
  const {id} = useParams()

  const AnimeInfo = async () => {
    const result = await getAnimeById(id)
    setSelected(result)
  };
  const AnimeCharacters = async () => {
    const result = await getAnimeCharacters(id)
    setSelected(result)
  };
  useEffect(()=>{
    
    AnimeInfo();
    AnimeCharacters();

  },[])
  console.log(anime)
  return (


  
      <div className='anime-container-d'>
        <h1 className='anime-title'>{anime.title} </h1>
        <div className='info'>
                    
                    {/* <ul className='genres'>{anime.genres.name}</ul> */}
                    <p className='season'> Season: {anime.season}</p>
                    <p className='type'>Type:{anime.type}</p>
                    <p className='source'>Source : {anime.source}</p>
                    <p className='episodes'> Episodes: {anime.episodes}</p>
                    <p className='status'>Status :{anime.status}</p>
                    <p className='rating'>Rating: {anime.rating}</p>
                    <p className='score'>Score :{anime.score}</p>

                </div>
         
          <img className='anime-img' src={anime.images?.jpg?.large_image_url} alt="" />
          <div className='anime-characters '> 
       
        
        </div> 


           
                </div>
       
        
      
               
                    
              
            
      
   
  )
}

export default AnimeDetail