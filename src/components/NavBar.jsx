import React, { Fragment, useState } from 'react'
import '../Styles/NavBarStyles.css'
import { BiSearchAlt } from 'react-icons/bi'
import { Routes, Route, NavLink } from 'react-router-dom'
import Animes from './Animes/Animes'
import LastUpdates from './LastUpdates/LastUpdates'
import TopWatching from './TopWatching/TopWatching'


function NavBar() {
    const [toggle, setToggle] = useState(true)

    return (
       
        <Fragment>
            <nav className={toggle ? '' : 'NavBarColor'}>
                <div className='nav-options'>
                <NavLink to="/" >
                    <h1 id={toggle ? '' : 'heading'} > <img src=".././gojo.png" width="60" /> ANIMIX </h1>
                    </NavLink>
                    <NavLink to="/LastUpdates" style={({isActive})=>{return{color:isActive ? '#fff':'#EE9B00'}}}>
                        <span id={toggle ? 'Movies' : 'MoviesLight'}> LAST UPDATES </span>
                    </NavLink>
                    <NavLink to="/" style={({isActive})=>{return{color:isActive ? '#fff':'#EE9B00'}}}>
                        <span id={toggle ? 'Movies' : 'MoviesLight'}>ANIME LIST</span>
                    </NavLink>
                    <NavLink to="/TopWatching" style={({isActive})=>{return{color:isActive ? '#fff':'#EE9B00'}}}>
                        <span id={toggle ? 'Movies' : 'MoviesLight'}> TOP WATCHING </span>
                    </NavLink>
                </div>

                <div className='input-group'>
                    <input type="text" placeholder='Search Whatever you want' />
                    <BiSearchAlt fontSize={21} color='white' id='search' />
                    <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
                        <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
                    </div>
                </div>
            </nav>
        </Fragment>
      
    )
}

export default NavBar
