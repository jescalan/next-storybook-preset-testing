import s from './style.module.css'
import '../../pages/_app'

interface IProps {
  name: String
}

function TestComponent({ name }: IProps) {
  return (
    <div className={s.root}>
      <p>hi this is a test for {name}</p>
      <div className='its-a-trap'></div>
    </div>
  )
}

export default TestComponent
