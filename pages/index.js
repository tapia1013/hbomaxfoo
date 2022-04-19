import Head from 'next/head'
import { useEffect } from 'react';
import { useStateContext } from '../components/HBOProvider'
import MainLayout from '../components/Layouts/MainLayout';
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
import { useRouter } from 'next/router';
import MediaRow from '../components/UI/MediaRow/MediaRow';
import AuthCheck from '../components/AuthCheck';
import LazyLoad from 'react-lazyload';
import Placeholders from '../components/UI/Placeholders/Placeholders';





export default function Home() {
  const globalState = useStateContext();
  const router = useRouter()





  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        location='In theaters and on HBO MAX. Streaming throughout May 23.'
        mediaUrl='/movies/id'
        title='Mortal Kombat'
        videoUrl='https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16'
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

      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholders title='Series' type='small-h' />
        }
      >
        <MediaRow
          title='Series'
          type='small-h'
          endpoint='discover/tv?primary_release_year=2022'
        />
      </LazyLoad>

      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholders title='Action' type='large-h' />
        }
      >
        <MediaRow
          title='Action'
          type='large-h'
          endpoint='discover/movie?with_genres=28&primary_release_year=2022'
        />
      </LazyLoad>

      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholders title='Animation' type='small-v' />
        }
      >
        <MediaRow
          title='Animation'
          type='small-v'
          endpoint='discover/movie?with_genres=16&primary_release_year=2022'
        />
      </LazyLoad>

      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholders title='Drama' type='small-h' />
        }
      >
        <MediaRow
          title='Drama'
          type='small-h'
          endpoint='discover/movie?with_genres=18&primary_release_year=2022'
        />
      </LazyLoad>

      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholders title='Horror' type='large-v' />
        }
      >
        <MediaRow
          title='Horror'
          type='large-v'
          endpoint='discover/movie?with_genres=27&primary_release_year=2022'
        />
      </LazyLoad>

      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholders title='Romance' type='small-v' />
        }
      >
        <MediaRow
          title='Romance'
          type='small-v'
          endpoint='discover/movie?with_genres=10749&primary_release_year=2022'
        />
      </LazyLoad>

      <LazyLoad
        offset={-200}
        placeholder={
          <Placeholders title='Scifi' type='small-h' />
        }
      >
        <MediaRow
          title='Scifi'
          type='small-h'
          endpoint='discover/movie?with_genres=878&primary_release_year=2022'
        />
      </LazyLoad>
    </MainLayout>
  )
}
