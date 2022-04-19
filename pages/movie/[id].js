import Head from 'next/head'
import { useEffect, useState } from 'react';
import MainLayout from '../../components/Layouts/MainLayout';
import CastInfo from '../../components/UI/CastInfo/CastInfo'
import FeaturedMedia from '../../components/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../../components/UI/MediaRow/MediaRow'
import AuthCheck from '../../components/AuthCheck'
import { useRouter } from 'next/router';
import axios from 'axios';


export default function SingleMediaPage(props) {
  const [mediaData, setMediaData] = useState(false)

  const router = useRouter();
  console.log(props);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${props.query.id}?api_key=c1b0e735ad3ff470f44fa29c9a1e6189`)
        setMediaData(res.data)
        console.log(res);

      } catch (error) {
        console.log('Error Respone', error);
      }

    }

    fetchMovies()
  }, [])




  return AuthCheck(
    <MainLayout>
      <FeaturedMedia title={mediaData.title} />
      {/* <MediaRow title='More Like This' type='small-v' /> */}
      <CastInfo />
    </MainLayout>
  )
}


export async function getServerSideProps(context) {
  return {
    props: {
      query: context.query
    }
  }
}