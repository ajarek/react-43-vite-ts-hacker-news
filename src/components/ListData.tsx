interface Data {
  author: string
  title: string
  points: number
  num_comments: number
  url: string
  objectID:string
}
type Props = {
  data:Data[]
  removeCard:(event: React.MouseEvent<HTMLButtonElement>)=>void
  

}
const ListData = ({ data,removeCard}: Props) => {
 
  return (
    <div className='wrapper-list'>
      {data.map((el: Data, index: number) => {
        return (
          <div
            key={index}
            className={'card'}
            id={el.objectID}
          >
            <h4>{el.title}</h4>
            <p>
              {el.points} points by {el.author} | {el.num_comments} comments
            </p>
            <a
              href={el.url}
              target='_blank'
              className='button'
            >
              Read More
            </a>
            <button className='button'
            
            onClick={removeCard}
            >
              Remove
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default ListData
