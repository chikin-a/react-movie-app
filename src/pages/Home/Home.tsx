<<<<<<< HEAD
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
=======
import { useEffect, useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import Tabs from "../../components/Tabs/Tabs";
import { fetchMoviesByPageAndCategory } from "../../services/ApiService";
import { TabsCategoriesProps } from "../../components/Tabs/Tabs";
import { MediaItem, Movie, TVShow } from "./HomeTypes";
import "./Home.scss";

const Home = () => {
  const [data, setData] = useState<MediaItem[]>([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState<TabsCategoriesProps>("all");

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchMoviesByPageAndCategory(page, category);
        setData(result.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    getData();
  }, [category, page]);

  const handleCategoryChange = (category: TabsCategoriesProps) => {
    setCategory(category);
  };
>>>>>>> 80524b1b56e18d987dae7e4513866faf2d877330

  return (
    <main className="home">
      <div className="container">
        <h1 className="title">MaileHereko</h1>
        <p className="desc">
          List of movies and TV Shows, I, <span>Pramod Poudel</span> have
          watched till date. Explore what I have watched and also feel free to
          make a suggestion. 😉
        </p>
        <SearchInput />
<<<<<<< HEAD
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
=======
        <Tabs handleCategoryChange={handleCategoryChange} />
        {data.map((el) => (
          <div key={el.id}>
            {el.media_type === "movie"
              ? (el as Movie).title
              : (el as TVShow).name}
          </div>
        ))}
>>>>>>> 80524b1b56e18d987dae7e4513866faf2d877330
      </div>
    </main>
  );
};

export default Home;
