import { ReactElement } from "react"

type Props = {
  children?:
  | React.ReactChild
  | React.ReactChild[];
}
export const Loading = ({children}:Props) => {
  return <div className={'loading'}> 
  {children}
  </div>
}
export default Loading
