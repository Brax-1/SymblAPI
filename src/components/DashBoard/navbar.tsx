import React, { useState } from 'react'
import { List, ListItemText, ListItemIcon, Collapse } from '@material-ui/core'
import {
  QuestionAnswer,
  Settings,
  OutlinedFlag,
  ExpandMore,
  ExpandLess,
  Home,
} from '@material-ui/icons'
import Demo from '@components/Demo/Demo'
import { ListItemButton } from '@mui/material'
import { useRouter } from 'next/router'
import vedxlogo from '../../images/ved_logo.png'
import Image from 'next/image'
const Navbar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(true)
  const [DemoOpen, setDemoOpen] = useState(false)
  const handleClick = (callback: (n: boolean) => void, val: boolean) => {
    callback(!val)
  }
  return (
    <>
      {DemoOpen ? <Demo setDemoOpen={setDemoOpen} /> : null}

      <div className="MainDashLeft">
        <List
          style={{ width: '100%', maxWidth: 360 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <div className="LogoCover">
            <Image src={vedxlogo} height="50px" width="40px" />
            <div className="MainLogoName">
              VEDX <span>Solutions</span>
            </div>
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
    </>
  )
}

export default Navbar
