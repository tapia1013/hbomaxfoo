import { useState, useEffect } from 'react';
import axios from 'axios';
import { shuffuleArray } from '../../utilities';
import Link from 'next/link'




const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([])


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/${props.endpoint}&api_key=c1b0e735ad3ff470f44fa29c9a1e6189`)

        setMoviesData(shuffuleArray(res.data.results))
        // console.log(movies);

        setLoadingData(false)

        console.log('Successful Reponse ', props.title)
        // console.log(res);



      } catch (error) {
        console.log('Error Respone', error);
      }

    }

    fetchMovies()
  }, [])



  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 1; index <= digit; index++) {
      thumbnails.push(comp)
    }

    return thumbnails;
  }



  const showThumbnails = (type) => {
    // setTimeout(() => setLoadingData(false), 5000);

    return loadingData
      ? loopComp((<Skeleton />), 10)
      : movies.map((movie) => {
        return <Thumbnail movieData={movie} type={type} mediaType={props.mediaType} />
      })
  }




  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">

        {showThumbnails(props.type)}

        {/* {loopComp(
          (<Thumbnail />), 10
        )} */}


      </div>
    </div>
  )
}




const Thumbnail = (props) => {
  const thumbsize = (type) => {
    if (type === 'large-v') {
      return '400'
    }

    if (type === 'small-v') {
      return '185'
    }

    if (type === 'large-h') {
      return '500'
    }

    if (type === 'small-h') {
      return '342'
    }
  }



  return (
    <Link href={`/${props.mediaType === 'movie' ? 'movie' : 'tv'}/${props.movieData.id}`}>
      <a>
        <div className="media-row__thumbnail">
          <img src={`https://image.tmdb.org/t/p/w${thumbsize(props.type)}/${props.movieData.poster_path}`} />
          <div className="media-row__top-layer">
            <i className="fas fa-play" />
          </div>
        </div>
      </a>
    </Link>
  )
}


const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className='media-row__thumbnail-skeleton-img'></div>
    </div>
  )
}

MediaRow.defaultProps = {
  mediaType: 'movie'
}

export default MediaRow;