import './SearchInput.scss'
import searchIcon from '../../assets/icons/search.svg'

const SearchInput = () => {
  return (
    <form className='search-input'>
      <label htmlFor='search'>
        <img src={searchIcon} alt='Search' />
      </label>
      <input
        type='text'
        name='search'
        placeholder='Search Movies or TV Shows'
      />
    </form>
  )
}

export default SearchInput
