import { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.scss'
import SearchInput from '../../components/SearchInput/SearchInput'
import Tabs from '../../components/Tabs/Tabs'
import { Card } from '../../components/Card/Card'
import SkeletonCard from '../../components/SkeletonCard/SkeletonCard'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/trending/all/day?language=en-US',
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjYzMGMwYTYzMTliZGEwNmEyYmFlYzkwYzRkNTE2ZSIsInN1YiI6IjY2NGIzYmM3NmZjNjc0ZWM1M2NjODU0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LxZcp8PXMph4slYQaW5qRdwzWsdWH8XIWD7lRTwLoBw',
              accept: 'application/json',
            },
          }
        )

        setMovies(res.data.results)
        console.log(movies)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    setTimeout(() => {
      fetchMovies()
    }, 500)
  }, [])

  return (
    <main className='home'>
      <div className='container'>
        <h1 className='title'>MaileHereko</h1>
        <p className='desc'>
          List of movies and TV Shows, I, <span>Pramod Poudel</span> have
          watched till date. Explore what I have watched and also feel free to
          make a suggestion. 😉
        </p>
        <SearchInput />
        <Tabs />

        <div className='movies'>
          {loading
            ? Array(20)
                .fill(0)
                .map((_, i) => <SkeletonCard key={i} />)
            : movies.map(
                (movie: {
                  id: number
                  name: string
                  title: string
                  poster_path: string
                  vote_average: number
                }) => (
                  <Card
                    key={movie.id}
                    id={movie.id}
                    name={movie.name || movie.title}
                    poster={movie.poster_path}
                    voteAverage={movie.vote_average}
                  />
                )
              )}
        </div>
      </div>
    </main>
  )
}

export default Home
