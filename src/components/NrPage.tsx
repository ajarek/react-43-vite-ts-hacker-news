import { useContext } from 'react'
import { AppContext } from '../App'
const NrPage = () => {
  const { pageNumber, setPageNumber } = useContext(AppContext)
  const pageInc = () => {
    setPageNumber(pageNumber + 1)
    if (pageNumber >= 50) {
      setPageNumber(0)
    }
  }
  const pageDec = () => {
    setPageNumber(pageNumber - 1)
    if (pageNumber <= 0) {
      setPageNumber(49)
    }
  }
  return (
    <div className='nr-page'>
      <button onClick={pageDec}>Prev</button>
      <p> {pageNumber} of 50 </p>
      <button onClick={pageInc}>Next</button>
    </div>
  )
}

export default NrPage
