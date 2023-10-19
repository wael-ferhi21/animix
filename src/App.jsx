import React from "react";
import NavBar from "./components/NavBar";
import LastUpdates from "./components/LastUpdates/LastUpdates";
import Animes from "./components/Animes/Animes";
import TopWatching from "./components/TopWatching/TopWatching";
import { Route, Routes } from "react-router-dom";
import AnimeDetail from "./components/AnimeDetail/AnimeDetail";
import AnimeCard from "./components/Animes/AnimeCard";

function App(element) {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
                <Route path='/' element={<Animes />} />
                <Route path="anime/:id" element={<AnimeDetail />} />
                <Route path='LastUpdates' element={<LastUpdates />} />
                <Route path='TopWatching' element={<TopWatching />} />
                <Route path="TopWatching/anime/:id" element={<AnimeDetail />} />
                <Route path="LastUpdates/anime/:id" element={<AnimeDetail />} />
                
                
              
               
            </Routes>
    </div>
  );
}

export default App
