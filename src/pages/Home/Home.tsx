import { useEffect, useState } from 'react'
import './Home.scss'
import SearchInput from '../../components/SearchInput/SearchInput'
import Tabs from '../../components/Tabs/Tabs'
import { Card } from '../../components/Card/Card'
import SkeletonCard from '../../components/SkeletonCard/SkeletonCard'
import { fetchMoviesByPageAndCategory } from '../../services/ApiService'
import { TabsCategoriesProps } from '../../components/Tabs/Tabs'
import { MediaItem, Movie, TVShow } from './HomeTypes'

const Home = () => {
  const [data, setData] = useState<MediaItem[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState<TabsCategoriesProps>('all')

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchMoviesByPageAndCategory(page, category)
        setData(result.results)

        console.log(result)

        setTimeout(() => {
          setLoading(false)
        }, 500)
      } catch (error) {
        console.error('Failed to fetch movies:', error)
      }
    }
    getData()
  }, [category, page])

  const handleCategoryChange = (category: TabsCategoriesProps) => {
    setCategory(category)
  }

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

        <Tabs handleCategoryChange={handleCategoryChange} />
        <div className='movies'>
          {loading
            ? Array(20)
                .fill(0)
                .map((_, i) => <SkeletonCard key={i} />)
            : data.map((el) => (
                <Card
                  key={el.id}
                  id={el.id}
                  name={el.title || el.name}
                  poster={el.poster_path}
                  voteAverage={el.vote_average}
                />
              ))}
        </div>
      </div>
    </main>
  )
}

export default Home
