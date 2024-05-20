import SearchInput from '../../components/SearchInput/SearchInput'
import './Home.scss'

const Home = () => {
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
      </div>
    </main>
  )
}

export default Home
