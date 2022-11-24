import { SetStateAction, useEffect, useRef, useState } from 'react'
import { useFetch } from './api/useFetch'
import ListData from './components/ListData'
import Loading from './components/Loading'
import SearchInput from './components/SearchInput'

function App() {
  const [valueSearch, setValueSearch] = useState('React')
  const [newData, SetNewData] = useState<[]>([])
  const searchInput = useRef<HTMLInputElement>(null)

  const InputSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setValueSearch(e.target.value)
  }
  useEffect(() => {
    searchInput.current?.focus()
  }, [])
  const url = `https://hn.algolia.com/api/v1/search?query=${valueSearch}&page=0`

  const { data, pending, error } = useFetch(url)
  //  console.log(data?.hits);

  useEffect(() => {
    if (data) {
      const { hits } = data
      SetNewData(hits ? hits : [])
    }
  })
  return (
    <div className='App'>
      {pending ? (
        <div className={'full-page'}>
          <Loading />
        </div>
      ) : null}
      <h1> Search Hacker News</h1>
      <SearchInput
        onChange={InputSearch}
        value={valueSearch}
        focus={searchInput}
      />
      <ListData data={newData} />
    </div>
  )
}

export default App
