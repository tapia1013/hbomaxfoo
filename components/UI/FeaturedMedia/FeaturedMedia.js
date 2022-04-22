import { useRouter } from 'next/router';
import { useStateContext } from '../../HBOProvider';



const FeaturedMedia = (props) => {
  const globalState = useStateContext();

  const router = useRouter()


  const clickedPlay = () => {
    router.push(props.linkUrl)
  }


  const clickedAdd = (props) => {
    globalState.addToList({
      mediaId: props.mediaId,
      mediaType: props.mediaType,
      mediaUrl: props.mediaUrl
    })
    console.log('Clicked add');
  }



  const showMedia = () => {
    if (props.type === 'front') {
      return (
        <iframe
          className="featured-media__video"
          width="100%"
          height="100%"
          src={props.mediaUrl}
          allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      )
    } else {
      return (
        <img src={props.mediaUrl} className="featured-media__img" />
      )
    }
  }

  return (
    <div className={`featured-media ${props.type === 'single' ? 'featured-media--single' : ''}`}>
      {showMedia()}

      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div
            style={{ cursor: 'pointer' }}
            onClick={clickedPlay}
            className="featured-media__title"
          >{props.title}</div>

          <div className={`featured-media__playing`}>
            NOW PLAYING
          </div>

          <div
            className={`featured-media__location ${props.type === 'single' ? 'hide-comp' : ''}`}
          >
            {props.location}
          </div>

          <div className="featured-media__buttons">
            <div style={{ cursor: 'pointer' }}
              className="featured-media__play-btn"
              onClick={clickedPlay}
            >
              <i className="fas fa-play" />
            </div>

            <div
              className={`featured-media__add-btn ${props.type !== 'single' ? 'hide-comp' : ''}`}
              style={{ cursor: 'pointer' }}
              onClick={() => clickedAdd(props)}
            >
              <i className="fas fa-plus" />
            </div>

            <div
              onClick={clickedPlay}
              className={`featured-media__info-btn ${props.type === 'single' ? 'hide-comp' : ''}`}
            >
              MORE INFO
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedMedia;