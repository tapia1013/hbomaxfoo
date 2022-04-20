import axios from 'axios';
import { useEffect, useState } from 'react';



const CastInfo = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [credits, setCredits] = useState([])


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${props.mediaType === 'movie' ? 'movie' : 'tv'}/${props.mediaId}/credits?api_key=c1b0e735ad3ff470f44fa29c9a1e6189`)
      .then(function (response) {
        setCredits(response.data)
        setLoadingData(false)
      })
      .catch(function (error) {
        console.log('Error ', error);
      })
  }, [credits])



  const showCast = () => {
    if (loadingData !== true) {
      return credits.cast.map((item) => (
        <ul className='cast-info__crew'>
          <li>{item.character}</li>
          <li>{item.name}</li>
        </ul>
      ))
    } else {
      return (
        <div>Loading Cast</div>
      )
    }

  }





  const showCrew = () => {
    if (loadingData !== true) {
      return credits.crew.map((item) => (
        <ul className='cast-info__crew'>
          <li>{item.job}</li>
          <li>{item.name}</li>
        </ul>
      ))
    } else {
      return (
        <div>Loading Crew</div>
      )
    }

  }






  return (
    <div className="cast-info">
      <div className="cast-info__group-title">
        Cast
      </div>
      <div className="cast-info__list">
        {showCast()}
      </div>
      <div className="cast-info__group-title">
        Crew
      </div>
      <div className="cast-info__list">
        {showCrew()}
      </div>
    </div>
  )
}

export default CastInfo;


