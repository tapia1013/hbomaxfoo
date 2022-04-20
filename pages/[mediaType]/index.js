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





  return AuthCheck(
    <MainLayout>
      {/* <FeaturedMedia
        type='front'
        location='In theaters and on HBO MAX. Streaming throughout May 23.'
        linkUrl='/movie/460465'
        title='Mortal Kombat'
        mediaUrl='https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16'
      /> */}
      <GenreNav
        mediaType={props.query.MediaType}
        genresData={props.genresData}
      />
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholders title='Movies' type='large-v' />
        }
      >
        <MediaRow
          title='Movies'
          type='large-v'
          endpoint='discover/movie?sort_by=popularity.desc&primary_release_year=2022'
        />
      </LazyLoad>
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