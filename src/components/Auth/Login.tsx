import { Button, Checkbox, LinearProgress } from '@material-ui/core'
import { Alert } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import style from '../../style/SignIn.module.css'
import AuthApi from 'src/api/Auth'
let showAlert = <></>

interface loginMessageFormat {
  code: string | number
  error: boolean
  msg: string
}

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  async function handleLogin() {
    setLoading(true)
    const url = `https://profved.com/wp-json/wp/v1/remote_authentication/?username=${userName}&password=${password}`
    const parsedData = ((await AuthApi.loginAuthCheck(
      url
    )) as unknown) as loginMessageFormat
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
      router.push('/dashboard')
    } else if (parsedData.code.toString() === '401') {
      showAlert = (
        <Alert variant="filled" severity="error" style={{ borderRadius: '0' }}>
          Wrong Credentials
        </Alert>
      )
      setLoading(false)
    }
  }

  return (
    <>
      {showAlert != <></> ? showAlert : null}
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
