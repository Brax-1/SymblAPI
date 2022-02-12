import HomeComponent from '@components/DashBoard/home'
import React from 'react'
import ProtectedRoute from '../_protectedRoute'
const Index = () => {
  return <HomeComponent />
}

export default ProtectedRoute(Index)
