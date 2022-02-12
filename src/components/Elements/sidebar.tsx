import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import vedxlogo from 'src/images/ved_logo.png'
import Image from 'next/image'
import { Collapse } from '@material-ui/core'
import {
  QuestionAnswer,
  Settings,
  OutlinedFlag,
  ExpandMore,
  ExpandLess,
  Home,
} from '@material-ui/icons'
import { ListItemButton } from '@mui/material'
import { useState } from 'react'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false)
  const [open, setOpen] = useState(true)
  const handleClick = (callback: (n: boolean) => void, val: boolean) => {
    callback(!val)
  }

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState(open)
  }

  const list = () => (
    <>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
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
          <ListItemButton className="ListItemButton">
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
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Quiz" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Demo" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
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
      </Box>
    </>
  )

  return (
    <div>
      {
        <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  VEDX
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Drawer open={state} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </>
      }
    </div>
  )
}
