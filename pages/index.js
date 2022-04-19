import Head from 'next/head'
import { useEffect } from 'react';
import { useStateContext } from '../components/HBOProvider'
import MainLayout from '../components/Layouts/MainLayout';
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
import { useRouter } from 'next/router';
import MediaRow from '../components/UI/MediaRow/MediaRow';
import AuthCheck from '../components/AuthCheck';




export default function Home() {
  const globalState = useStateContext();
  const router = useRouter()

  useEffect(() => {

  }, [])


  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow
        title='Movies'
        type='large-v'
        endpoint='discover/movie?sort_by=popularity.desc&primary_release_year=2022'
      />
      <MediaRow
        title='Series'
        type='small-h'
        endpoint='discover/tv?primary_release_year=2022'
      />
      <MediaRow
        title='Action'
        type='large-h'
        endpoint='discover/movie?with_genres=28&primary_release_year=2022'
      />
      <MediaRow
        title='Animation'
        type='small-v'
        endpoint='discover/movie?with_genres=16&primary_release_year=2022'
      />
      <MediaRow
        title='Drama'
        type='small-h'
        endpoint='discover/movie?with_genres=18&primary_release_year=2022'
      />
      <MediaRow
        title='Horror'
        type='large-v'
        endpoint='discover/movie?with_genres=27&primary_release_year=2022'
      />
      <MediaRow
        title='Romance'
        type='small-v'
        endpoint='discover/movie?with_genres=10749&primary_release_year=2022'
      />
      <MediaRow
        title='Scifi'
        type='small-h'
        endpoint='discover/movie?with_genres=878&primary_release_year=2022'
      />
    </MainLayout>
  )
}
