import React from "react";
import NavBar from "./components/NavBar";
import LastUpdates from "./components/LastUpdates";
import Animes from "./components/Animes/Animes";
import TopWatching from "./components/TopWatching/TopWatching";
import { Route, Routes } from "react-router-dom";
import AnimeDetail from "./components/AnimeDetail/AnimeDetail";

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
                <Route path='/' element={<Animes />} />
                <Route path="anime/:id" element={<AnimeDetail />} />
                <Route path='LastUpdates' element={<LastUpdates />} />
                <Route path='TopWatching' element={<TopWatching />} />
                <Route path="TopWatching/anime/:id" element={<AnimeDetail />} />
            </Routes>
    </div>
  );
}

export default App
