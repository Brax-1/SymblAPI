import { Button, Checkbox, LinearProgress } from '@material-ui/core'
import { Alert } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import style from '../../style/SignIn.module.css'
import QuizApi from 'src/api/Quiz'
import Image from 'next/image'
import vedxlogo from '../../images/ved_logo.png'
import { setTokenInStorge } from 'src/utils/auth'
import { loginMessageFormat } from 'src/components/interfaces/dashboardinterface'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(<></>)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  async function handleLogin() {
    setLoading(true)
    const url = `profved/login`
    const parsedData = ((await QuizApi.loginAuth(url, {
      username: userName,
      password: password,
    })) as unknown) as loginMessageFormat
    if (parsedData.code.toString() === '200') {
      setShowAlert(
        <Alert
          variant="filled"
          severity="success"
          style={{ borderRadius: '0' }}
        >
          Successfully Sign in
        </Alert>
      )
      setTokenInStorge(parsedData.data.token)
      router.push('/dashboard')
    } else {
      setShowAlert(
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
            <div className={style.LoginLeftCover}>
              <div style={{ width: '70%', height: '80%' }}>
                <Image src={vedxlogo} alt="fill" />
              </div>
            </div>
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
