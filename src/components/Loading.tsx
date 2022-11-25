import { ReactElement } from "react"

type Props = {
  children?:React.ReactNode
}
export const Loading = ({children}:Props) => {
  return <div className={'loading'}> 
  {children}
  </div>
}
export default Loading
