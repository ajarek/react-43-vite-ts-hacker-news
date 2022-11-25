import {
  SetStateAction,
  useEffect,
  useRef,
  useState,
  createContext,
} from 'react'
import { useFetch } from './api/useFetch'
import ErrorMessage from './components/ErrorMessage'
import ListData from './components/ListData'
import Loading from './components/Loading'
import NrPage from './components/NrPage'
import SearchInput from './components/SearchInput'
export type GlobalContent = {
  pageNumber: number
  setPageNumber: (c: number) => void
}
export const AppContext = createContext<GlobalContent>({
  pageNumber: 0,
  setPageNumber: () => {},
})

function App() {
  const [valueSearch, setValueSearch] = useState('React')
  const [newData, SetNewData] = useState<[]>([])
  const [pageNumber, setPageNumber] = useState(0)
  const searchInput = useRef<HTMLInputElement>(null)
  const url = `https://hn.algolia.com/api/v1/search?query=${valueSearch}&page=${pageNumber}`

  const InputSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setValueSearch(e.target.value)
  }
  useEffect(() => {
    searchInput.current?.focus()
  }, [valueSearch])

  const { data, pending, error } = useFetch(url)

  useEffect(() => {
    if (data) {
      const { hits } = data
      SetNewData(hits ? hits : [])
    }
  })
  const removeCard = (e: any) => {
    e.target.parentElement.remove()
    console.log(newData.length)
  }

  return (
    <AppContext.Provider value={{ pageNumber, setPageNumber }}>
      <div className='App'>
        {error ? (
          <div className={'full-page'}>
            <ErrorMessage>{error}</ErrorMessage>
          </div>
        ) : null}
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
        <NrPage />
        <ListData
          data={newData}
          removeCard={removeCard}
        />
      </div>
    </AppContext.Provider>
  )
}

export default App
