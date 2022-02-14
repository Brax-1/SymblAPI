import React, { useState } from 'react'
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
import SimpleBackdrop from '@components/Elements/backdrop'

const Navbar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(true)
  const [openBackdrop, setOpenbackdrop] = useState(false)
  const handleClick = (callback: (n: boolean) => void, val: boolean) => {
    callback(!val)
  }
  const [value, setValue] = React.useState('recents')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    return event
  }
  function handleLogout() {
    setOpenbackdrop(true)
    localStorage.removeItem('token')
    router.push('/admin')
  }
  function handleSwitch(url: string) {
    if (url !== router.route) {
      router.push(url)
      setOpenbackdrop(true)
    }
  }
  return (
    <>
      <SimpleBackdrop open={openBackdrop} />
      <div className="MainDashLeft widthDisplayabove900">
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
            onClick={() => {
              handleSwitch('/dashboard')
            }}
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
              <ListItemButton
                onClick={() => {
                  handleSwitch('/dashboard/quiz')
                }}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Quiz" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  handleSwitch('/dashboard/demo')
                }}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Demo" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton
            onClick={() => {
              handleSwitch('/dashboard/setting')
            }}
          >
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
          <ListItemButton onClick={() => handleLogout()}>
            <ListItemIcon>
              <OutlinedFlag />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItemButton>
        </List>
      </div>
      <div className="MainDashLeft widthDisplaybelow900">
        <BottomNavigation
          sx={{ width: '100vw' }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            onClick={() => {
              handleSwitch('/dashboard')
            }}
            label="Home"
            value="Home"
            icon={<Home />}
          />
          <BottomNavigationAction
            onClick={() => {
              handleSwitch('/dashboard/demo')
            }}
            label="Demo"
            value="Demo"
            icon={<Book />}
          />
          <BottomNavigationAction
            onClick={() => {
              handleSwitch('/dashboard/quiz')
            }}
            label="Quiz"
            value="Quiz"
            icon={<QuestionAnswer />}
          />
          <BottomNavigationAction
            onClick={() => {
              handleSwitch('/dashboard/setting')
            }}
            label="Setting"
            value="Setting"
            icon={<Settings />}
          />
          <BottomNavigationAction
            onClick={() => handleLogout()}
            label="LogOut"
            value="LogOut"
            icon={<OutlinedFlag />}
          />
        </BottomNavigation>
      </div>
    </>
  )
}

export default Navbar
