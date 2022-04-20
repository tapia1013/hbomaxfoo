import Head from 'next/head'
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainLayout from '../../components/Layouts/MainLayout';
import CastInfo from '../../components/UI/CastInfo/CastInfo'
import FeaturedMedia from '../../components/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../../components/UI/MediaRow/MediaRow'
import AuthCheck from '../../components/AuthCheck'
import { useRouter } from 'next/router';
import LazyLoad from 'react-lazyload';
import Placeholders from '../../components/UI/Placeholders/Placeholders';





export default function SingleMediaPage(props) {
  const [mediaData, setMediaData] = useState(false)

  const router = useRouter();
  console.log(props);


  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const res = await axios.get(`https://api.themoviedb.org/3/movie/${props.query.id}?api_key=c1b0e735ad3ff470f44fa29c9a1e6189`)
  //       setMediaData(res.data)
  //       console.log(res);

  //     } catch (error) {
  //       console.log('Error Respone', error);
  //     }

  //   }

  //   fetchMovies()
  // }, [mediaData])




  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        title={props.query.mediaType === 'movie' ? props.mediaData.title : props.mediaData.name}
        type='single'
        location='In theaters and on HBO MAX. Streaming throughout May 23.'
        linkUrl='/movies/id'
        mediaUrl={`https://image.tmdb.org/t/p/w1280${props.mediaData.backdrop_path}`}
      />
      <LazyLoad
        offset={-200}
        placeholder={
          <Placeholders title='Movies' type='large-v' />
        }
      >
        <MediaRow
          updateData={props.query.id}
          title='Similar To This'
          type='large-v'
          mediaType={props.query.mediaType}
          endpoint={`${props.query.mediaType === 'movie' ? 'movie' : 'tv'}/${props.query.id}/similar?`}
        />
      </LazyLoad>
      <CastInfo
        mediaType={props.query.mediaType}
        mediaId={props.query.id}
        updateData={props.query.id}
      />
    </MainLayout>
  )
}


export async function getServerSideProps(context) {
  let mediaData;

  try {
    mediaData = await axios.get(`https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?api_key=c1b0e735ad3ff470f44fa29c9a1e6189`)
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      mediaData: mediaData.data,
      query: context.query
    }
  }
}