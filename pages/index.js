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
        endpoint=''
      />
      <MediaRow
        title='Series'
        type='small-h'
        endpoint=''
      />
      <MediaRow
        title='Action'
        type='large-h'
        endpoint=''
      />
      <MediaRow
        title='Anime'
        type='small-v'
        endpoint=''
      />
      <MediaRow
        title='Drama'
        type='small-h'
        endpoint=''
      />
      <MediaRow
        title='Horror'
        type='large-v'
        endpoint=''
      />
      <MediaRow
        title='Romance'
        type='small-v'
        endpoint=''
      />
      <MediaRow
        title='Scifi'
        type='small-h'
        endpoint=''
      />
    </MainLayout>
  )
}
