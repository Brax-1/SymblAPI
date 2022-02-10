import React, { useEffect, useState } from 'react'
import QuizApi from 'src/api/Quiz'
import {
  List,
  ListItemText,
  ListItemIcon,
  Collapse,
  Badge,
} from '@material-ui/core'
import {
  Send,
  Drafts,
  Email,
  Inbox,
  Settings,
  OutlinedFlag,
  ExpandMore,
  ExpandLess,
  DeleteForever,
  AccountBox,
  Score,
} from '@material-ui/icons'

import Pagination from '@mui/material/Pagination'
import Selector from '@components/Elements/selector'
import MyTable from '@components/Elements/table'
import { ApiInnerData } from '@components/interfaces/dashboardinterface'
import Demo from '@components/Demo/Demo'
import { ListItemButton } from '@mui/material'

const Dashboard = () => {
  const [open, setOpen] = useState(true)
  const [opentrash, setOpentrash] = useState(true)
  const [filterSort, setFilterSort] = useState<string>('')
  const [DemoOpen, setDemoOpen] = useState(false)
  const [demoBookbutton, setBookDemoButton] = useState(false)
  const filterSelector = [
    { value: 'serial_No', name: 'Serial No' },
    { value: 'date', name: 'Date' },
    { value: 'name', name: 'St Name' },
    { value: 'ac_Name', name: 'Activity Name' },
    { value: 'score', name: 'Score' },
    { value: 'at_Type', name: 'Attempt Type' },
    { value: '10', name: 'Attempt Number' },
  ]
  const handleClick = (callback: (n: boolean) => void, val: boolean) => {
    callback(!val)
  }
  const [data, setData] = useState<ApiInnerData[]>([])
  async function getData() {
    const arr = { search: '', sort: '' }
    arr['search'] = filterSort
    arr['sort'] = ''
    const data = ((await QuizApi.tableData(arr)) as unknown) as ApiInnerData[][]
    setData(data[0])
  }
  useEffect(() => {
    getData()
  }, [filterSort])
  return (
    <>
      {DemoOpen ? <Demo setDemoOpen={setDemoOpen} /> : null}

      <div className="MainDash">
        <div className="MainDashLeft">
          <List
            style={{ width: '100%', maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <div className="LogoCover">
              <i className="fab fa-slack MainLogoNavbar"></i>
              <div className="MainLogoName">
                VEDX <span>Solutions</span>
              </div>
            </div>
            <ListItemButton className="ListItemButton">
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText className="ListItemText" primary="Sent mail" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Score />
              </ListItemIcon>
              <ListItemText primary="Score" />
            </ListItemButton>
            <ListItemButton onClick={() => handleClick(setOpen, open)}>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Analysis" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary="Quiz"
                    onClick={() => setBookDemoButton(false)}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary="Demo"
                    onClick={() => setBookDemoButton(true)}
                  />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton
              onClick={() => handleClick(setOpentrash, opentrash)}
            >
              <ListItemIcon>
                <DeleteForever />
              </ListItemIcon>
              <ListItemText primary="Trash" />
              {opentrash ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={opentrash} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Clear" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Read All" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Spam" />
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
        </div>
        <div className="MaindashRight">
          <div className="MainDashNavbar">
            <div className="MainDashNavbarCover">
              <div className="MainDashNavbarleft">
                <div className="MainDashFilterSelector">
                  <Selector
                    callback={setFilterSort}
                    data={filterSelector}
                    title="Filter"
                  />
                </div>
                <div className="SearchFunctionCover">
                  <div className="SearchTextBoxCover">
                    <span>
                      <i className="fas fa-search"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Type here to search ..."
                      className="SearchTextBox"
                    />
                  </div>
                  <button className="SearchButton">Search</button>
                  {demoBookbutton ? (
                    <button
                      className="BookDemoButton"
                      onClick={() => setDemoOpen(true)}
                    >
                      Book Demo Quiz
                    </button>
                  ) : null}
                </div>
              </div>
              <div className="MainDashNavbarRight">
                <Badge badgeContent={4} color="primary">
                  <Email color="action" />
                </Badge>
                <div className="ProfileSpacer"></div>
              </div>
            </div>
          </div>
          <div className="MainDashTable">
            <div className="MaintableContent">
              <MyTable data={data} />

              <div className="Maintablebottom">
                <Pagination
                  count={10}
                  color="standard"
                  shape="circular"
                  style={{ color: 'white' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
