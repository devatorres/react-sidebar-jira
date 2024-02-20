import { Dashboard, Drawer } from '../../components'
import './Home.css'

export const Home = () => {
  return (
    <div className='home'>
      <Dashboard />
      <Drawer></Drawer>
    </div>
  )
}
