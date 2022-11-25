type Props = {
  children?:React.ReactNode
}
export const ErrorMessage = ({children}:Props) => {
  return <div className={'error-message'}> 
  {children}
  </div>
}

export default ErrorMessage