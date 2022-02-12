import HomeComponent from '@components/DashBoard/home'
import React from 'react'
import ProtectedRoute from '../_protectedRoute'
import { useRouter } from 'next/router'
const Index = () => {
  const router = useRouter()
  const data = router.query
  return <HomeComponent username={data.username} />
}

export default ProtectedRoute(Index)
