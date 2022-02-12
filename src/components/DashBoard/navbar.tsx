import React, { useState, useEffect } from 'react'
import { List, ListItemText, ListItemIcon, Collapse } from '@material-ui/core'
import {
  QuestionAnswer,
  Settings,
  OutlinedFlag,
  ExpandMore,
  ExpandLess,
  Home,
  Book,
} from '@material-ui/icons'
import {
  BottomNavigation,
  BottomNavigationAction,
  ListItemButton,
} from '@mui/material'
import { useRouter } from 'next/router'
import vedxlogo from '../../images/ved_logo.png'
import Image from 'next/image'

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(1400)
  const router = useRouter()
  const [open, setOpen] = useState(true)
  const handleClick = (callback: (n: boolean) => void, val: boolean) => {
    callback(!val)
  }
  const [value, setValue] = React.useState('recents')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    return event
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
    }
  }, [])

  return (
    <>
      {windowWidth > 900 ? (
        <div className="MainDashLeft">
          <List
            style={{ width: '100%', maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <div className="LogoCover">
              <Image src={vedxlogo} height="60px" width="60px" />
            </div>
            <ListItemButton
              className="ListItemButton"
              onClick={() => router.push('/dashboard')}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText className="ListItemText" primary="Home" />
            </ListItemButton>
            <ListItemButton onClick={() => handleClick(setOpen, open)}>
              <ListItemIcon>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary="Analysis" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton onClick={() => router.push('/dashboard/quiz')}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Quiz" />
                </ListItemButton>
                <ListItemButton onClick={() => router.push('/dashboard/demo')}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Demo" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={() => router.push('/dashboard/setting')}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <OutlinedFlag />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItemButton>
          </List>
        </div>
      ) : (
        <div className="MainDashLeft">
          <BottomNavigation
            sx={{ width: '100vw' }}
            value={value}
            onChange={handleChange}
          >
            <BottomNavigationAction
              onClick={() => router.push('/dashboard')}
              label="Home"
              value="Home"
              icon={<Home />}
            />
            <BottomNavigationAction
              onClick={() => router.push('/dashboard/demo')}
              label="Demo"
              value="Demo"
              icon={<Book />}
            />
            <BottomNavigationAction
              onClick={() => router.push('/dashboard/quiz')}
              label="Quiz"
              value="Quiz"
              icon={<QuestionAnswer />}
            />
            <BottomNavigationAction
              onClick={() => router.push('/dashboard/setting')}
              label="Setting"
              value="Setting"
              icon={<Settings />}
            />
            <BottomNavigationAction
              label="LogOut"
              value="LogOut"
              icon={<OutlinedFlag />}
            />
          </BottomNavigation>
        </div>
      )}
    </>
  )
}

export default Navbar
