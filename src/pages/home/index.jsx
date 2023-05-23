import Dashboard from '../../components/Dashboard'

//? The main import
import MySidebar from '../../components/MySidebar'

const Home = () => {
  return (
    <div id="root">
      <MySidebar />
      <Dashboard />
    </div>
  )
}

export default Home
