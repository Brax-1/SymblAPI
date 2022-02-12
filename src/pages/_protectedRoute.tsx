import Router from 'next/router'
import React from 'react'
import { getStoredToken } from 'src/utils/auth'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProtectedRoute(Component: any) {
  return class WrappedComponent extends React.Component<
    unknown,
    WrappedComponentProps
  > {
    state = {
      loggedIn: false,
    }
    componentDidMount() {
      const token = getStoredToken()
      if (token) {
        this.setState({ loggedIn: true })
      } else Router.push('/admin')
    }
    render() {
      const { loggedIn } = this.state

      if (loggedIn) return <Component />
      return <div></div>
    }
  }
}

export default ProtectedRoute

interface WrappedComponentProps {
  loggedIn: boolean
}
