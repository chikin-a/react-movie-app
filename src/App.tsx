import './App.scss'
import { Routes, Route } from 'react-router'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<div>movies</div>} />
        <Route path='/tv-shows' element={<div>tv shows</div>} />
        <Route path='/suggest-me' element={<div>suggest me</div>} />
        <Route path='*' element={<div>Error 404</div>} />
      </Routes>
    </>
  )
}

export default App
