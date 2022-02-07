import React, { useEffect, useState } from 'react'
import QuizApi from 'src/api/Quiz'
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Badge,
  Fab,
} from '@material-ui/core'
import {
  Send,
  ChatBubbleOutlineOutlined,
  Drafts,
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
import {
  ApiInnerData,
  filterBox,
} from '@components/interfaces/dashboardinterface'

const Dashboard = () => {
  const [open, setOpen] = useState(true)
  const [opentrash, setOpentrash] = useState(true)
  const [filters, setFilters] = useState<filterBox>({ search: '', sort: '' })
  const handleClick = (callback: (n: boolean) => void, val: boolean) => {
    callback(!val)
  }
  const [data, setData] = useState<ApiInnerData[]>([])
  async function getData() {
    const arr = { search: '', sort: '' }
    arr['search'] = filters.search
    arr['sort'] = filters.sort
    const data = ((await QuizApi.tableData(arr)) as unknown) as ApiInnerData[][]
    setData(data[0])
  }
  useEffect(() => {
    getData()
  }, [filters])
  return (
    <>
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
            <ListItem button className="ListItemButton">
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText className="ListItemText" primary="Sent mail" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Score />
              </ListItemIcon>
              <ListItemText primary="Score" />
            </ListItem>
            <ListItem button onClick={() => handleClick(setOpen, open)}>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Pls Open" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Read All" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Read Selected" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Read None" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              onClick={() => handleClick(setOpentrash, opentrash)}
            >
              <ListItemIcon>
                <DeleteForever />
              </ListItemIcon>
              <ListItemText primary="Trash" />
              {opentrash ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={opentrash} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Clear" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Read All" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Spam" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <OutlinedFlag />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </List>
        </div>
        <div className="MaindashRight">
          <div className="MainDashNavbar">
            <div className="MainDashNavbarCover">
              <div className="MainDashNavbarleft">
                <Selector setFilters={setFilters} />
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
                </div>
              </div>
              <div className="MainDashNavbarRight">
                <Badge badgeContent={4} color="primary">
                  <ChatBubbleOutlineOutlined color="action" />
                </Badge>
                <div className="ProfileSpacer"></div>
                <Fab
                  style={{ background: 'rgb(0, 189, 199)', color: 'white' }}
                  aria-label="edit"
                  size="medium"
                >
                  <i className="fas fa-user-alt"></i>
                </Fab>
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
