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
        <Tabs handleCategoryChange={handleCategoryChange} />
        {data.map((el) => (
          <div key={el.id}>
            {el.media_type === "movie"
              ? (el as Movie).title
              : (el as TVShow).name}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
