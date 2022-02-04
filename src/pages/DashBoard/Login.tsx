import { Button, Checkbox, LinearProgress } from '@material-ui/core'
import { Alert } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import style from '../../style/SignIn.module.css'
let showAlert = <></>
const Login = () => {
  const [loading, setLoading] = useState(false)
  const [loginStatus, setLoginStatus] = useState(0)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function handleLogin() {
    setLoading(true)
    const url = `https://profved.com/wp-json/wp/v1/remote_authentication/?username=${userName}&password=${password}`
    const data = await fetch(url)
    const parsedData = await data.json()

    if (parsedData.code.toString() === '200') {
      showAlert = (
        <Alert
          variant="filled"
          severity="success"
          style={{ borderRadius: '0' }}
        >
          Successfully Sign in
        </Alert>
      )
      setTimeout(() => {
        router.push('/components/DashBoard/Dashboard')
      }, 1000)
    } else if (parsedData.code.toString() === '401') {
      showAlert = (
        <Alert variant="filled" severity="error" style={{ borderRadius: '0' }}>
          Wrong Credentials
        </Alert>
      )
    }
    setLoginStatus(parsedData.code)
    setLoading(false)
    setTimeout(() => {
      setLoginStatus(0)
    }, 3000)
  }

  return (
    <>
      {loginStatus != 0 ? showAlert : null}
      <div className={style.MainLoginCover}>
        <div className={style.LoginCover}>
          {loading ? <LinearProgress style={{ width: '100%' }} /> : null}
          <div className={style.LoginDataCover}>
            <div className={style.LoginLeftCover}></div>
            <div className={style.LoginRightCover}>
              <div className={style.LoginSignInText}>Sign In With ProfVed</div>
              <div className={style.LoginInputCover}>
                <div className={style.LoginInputTitle}>Username / Email</div>
                <div className={style.LoginInputAreaCover}>
                  <i
                    className="fas fa-envelope"
                    style={{ margin: '10px 20px' }}
                  ></i>
                  <input
                    type="text"
                    className={style.LoginInputArea}
                    placeholder="Enter Username / Email ..."
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <div className={style.LoginInputCover}>
                <div className={style.LoginInputTitle}>Password</div>
                <div className={style.LoginInputAreaCover}>
                  <i
                    className="fas fa-lock"
                    style={{ margin: '10px 20px' }}
                  ></i>
                  <input
                    type="password"
                    className={style.LoginInputArea}
                    placeholder="Enter Password ..."
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className={style.LoginRememberMe}>
                <Checkbox disabled />
                Remember Me
              </div>
              <Button
                variant="contained"
                style={{
                  width: '80%',
                  background: 'rgb(0, 189, 199)',
                  color: 'white',
                  marginTop: '10px',
                  borderRadius: '50px',
                }}
                onClick={() => handleLogin()}
              >
                Sign In With ProfVed
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
