import Head from 'next/head'
import { useEffect } from 'react';
import { useStateContext } from '../../components/HBOProvider'
import MainLayout from '../../components/Layouts/MainLayout';
import FeaturedMedia from '../../components/UI/FeaturedMedia/FeaturedMedia';
import { useRouter } from 'next/router';
import MediaRow from '../../components/UI/MediaRow/MediaRow';
import AuthCheck from '../../components/AuthCheck';
import LazyLoad from 'react-lazyload';
import Placeholders from '../../components/UI/Placeholders/Placeholders';
import GenreNav from '../../components/UI/GenreNav/GenreNav';
import axios from 'axios';
import { shuffuleArray } from '../../components/utilities';





export default function MediaTypePage(props) {
  const globalState = useStateContext();
  const router = useRouter()




  const showRandomMedia = () => {
    let thumbType;

    return props.genresData.map((item) => {
      thumbType = shuffuleArray(globalState.thumbTypes)[0]

      return (
        <div key={item.id}>
          <LazyLoad
            offset={-200}
            placeholder={
              <Placeholders
                title={item.name}
                type={thumbType}
              />
            }
          >
            <MediaRow
              title={item.name}
              type={thumbType}
              endpoint={`discover/${props.query.mediaType}?with_genres=${item.id}&sort_by=popularity.desc&primary_release_year=2022`}
            />
          </LazyLoad>
        </div>
      )
    })
  }


  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        type='single'
        linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
        title={props.query.mediaType === 'movie' ? props.featuredData.title : props.featuredData.name}
        mediaUrl={`https://image.tmdb.org/t/p/w1280${props.featuredData.backdrop_path}`}
        mediaType={props.query.mediaType}
        mediaId={props.featuredData.id}
      />
      <GenreNav
        mediaType={props.query.mediaType}
        genresData={props.genresData}
      />
      {showRandomMedia()}
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
  let genresData;
  let featuredData;

  try {
    genresData = await axios.get(`https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=c1b0e735ad3ff470f44fa29c9a1e6189`);

    featuredData = await axios.get(`https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2022&api_key=c1b0e735ad3ff470f44fa29c9a1e6189`);

    console.log("genreData");
    console.log(genresData.data);
  } catch (error) {
    console.log("Error: ", error);
  }



  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffuleArray(featuredData.data.results)[0],
      query: context.query
    }
  }

}