import { ElementType, SetStateAction, useEffect, useRef, useState } from 'react'
import SearchInput  from './components/SearchInput'
function App() {
  const url = 'https://hn.algolia.com/api/v1/search?query=pizza&page=0'
  const [valueSearch, setValueSearch] = useState('React')
  const searchInput = useRef<HTMLInputElement>(null)
  
  const InputSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setValueSearch(e.target.value)
  }
  useEffect(() => {
    searchInput.current?.focus()
  }, [])
  return (
    <div className='App'>
      <h1> Search Hacker News</h1>
      <SearchInput
       onChange={InputSearch}
       value={valueSearch}
       focus={searchInput}
     
      />
    </div>
  )
}

export default App
