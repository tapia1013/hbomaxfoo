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





export default function Home() {
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
      <GenreNav />
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
