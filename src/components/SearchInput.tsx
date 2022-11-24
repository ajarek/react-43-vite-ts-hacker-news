type Props ={
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
  focus:any
}
const SearchInput = ({ onChange, value,focus}:Props) => {
  return (
    <div className='search-input'>
      <input
        type='text'
        value={value}
        onChange={onChange}
        ref={focus}
      />
    </div>
  )
}

export default SearchInput
