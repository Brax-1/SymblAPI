import Dashboard from '@components/DashBoard/Dashboard'
import { useEffect, useState } from 'react'
import Login from '../components/DashBoard/Login'
import QuizApi from 'src/api/Quiz'
const HomePage: React.FC = () => {
  const [statusLogin, setStatusLogin] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    QuizApi.tableData().then((datas: any) => setData(datas[0]))
  }, [])

  return (
    <>
      {statusLogin ? (
        <Dashboard data={data} />
      ) : (
        <Login setStatusLogin={setStatusLogin} />
      )}
    </>
  )
}

export default HomePage
