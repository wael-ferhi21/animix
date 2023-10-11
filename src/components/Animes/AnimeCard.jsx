
import { AiFillPlayCircle } from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
import '../Animes/Animes.css'
import React, { Fragment} from 'react'

function AnimeCard({element}) {
  return (
    <Fragment>
    <div>
     <div className='anime-container'>
          <Fragment >
            <div className='anime-item'>
              <AiFillPlayCircle color='green' fontSize={40} id="playIcon" width="30" />
              <img src={element.images?.jpg.large_image_url} width="310" alt={element.title} />
              <h3 id="title">{element.title}</h3>
              <h5 id="status"> {element.status}</h5>
              <h4 id="rate"> {element.score}/10 </h4>
              <BsStarHalf color='yellow' fontSize={30} id="starIcon" width ="30"/>
             
            </div>
          </Fragment>
         
       
      </div>
    </div>
  </Fragment>
  )
}

export default AnimeCard