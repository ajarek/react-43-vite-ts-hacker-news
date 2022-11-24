interface Data{
  author: string
  title: string
  points: number
  num_comments:number
  }
  type Props = {
    data: []
  }
const ListData = ({data}:Props) => {
  return (
    <div className="wrapper-list">
         {data.map((el:Data,index:number)=>{
        return (
          <div key={index} className={'card'}>
            <h4>{el.title}</h4>
            <p>{el.points} points by {el.author} | {el.num_comments} comments</p>
            <button>Read More</button><button>Remove</button>
            </div>
        )
            })}
    </div>
  )
}

export default ListData