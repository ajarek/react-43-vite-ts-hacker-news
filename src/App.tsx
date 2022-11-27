import { useEffect, useRef, useState, createContext } from 'react'
import { useFetch } from './api/useFetch'
import useDebounce from './hooks/useDebounce'
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
  const debouncedValue = useDebounce(valueSearch, 700)
  const [newData, SetNewData] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  const searchInput = useRef<HTMLInputElement>(null)
  const url = `https://hn.algolia.com/api/v1/search?query=${debouncedValue}&page=${pageNumber}`
  const { data, pending, error } = useFetch(url)

  useEffect(() => {
    searchInput.current?.focus()
  }, [url])

  useEffect(() => {
    const addData = () => {
      if (data) {
        const { hits } = data
        SetNewData(hits)
      }
    }
    addData()
  }, [debouncedValue, data])
  const removeCard = (e: any) => {
    const newArr = newData?.filter(
      (el: any) => el.objectID !== e.target.parentElement.id
    )

    SetNewData(newArr)
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
          onChange={(e: any) => setValueSearch(e.target.value)}
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
