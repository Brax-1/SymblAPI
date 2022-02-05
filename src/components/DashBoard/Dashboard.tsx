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

interface ApiInnerData {
  activity_name: string
  attemp_numer: number
  attempt_type: boolean
  consistency: string
  date: string
  leaderboard_rank: number
  level: string
  level_attempt_type: boolean
  name: string
  score: number
}
const Dashboard = () => {
  const [open, setOpen] = React.useState(true)
  const [opentrash, setOpentrash] = React.useState(true)
  const handleClick = (callback: (n: boolean) => void, val: boolean) => {
    callback(!val)
  }
  const [data, setData] = useState<ApiInnerData[]>([])

  async function getData() {
    const data = ((await QuizApi.tableData()) as unknown) as ApiInnerData[][]
    setData(data[0])
  }

  useEffect(() => {
    getData()
  }, [])
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
              <div className="MainTableCover">
                <table cellSpacing="0">
                  <thead>
                    <tr>
                      <th style={{ width: '4%' }}>Serial No</th>
                      <th style={{ width: '7%' }}>Date</th>
                      <th style={{ width: '13%' }}>S Name</th>
                      <th style={{ width: '13%' }}>Activity Name</th>
                      <th style={{ width: '5%' }}>Score</th>
                      <th style={{ width: '7%' }}>Attempt Type</th>
                      <th style={{ width: '6%' }}>Attempt Number</th>
                      <th style={{ width: '6%' }}>Level</th>
                      <th style={{ width: '9%' }}>Level Activity</th>
                      <th style={{ width: '7%' }}>Leaderboard Rank</th>
                      <th style={{ width: '5%' }}>Consistency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data !== undefined
                      ? data.map((datas: ApiInnerData, index: number) => {
                          return (
                            <tr key={index}>
                              <td>
                                <span>#{index + 1}</span>
                              </td>
                              <td>{datas.date}</td>
                              <td>{datas.name}</td>
                              <td>{datas.activity_name}</td>
                              <td>{datas.score}</td>
                              <td>
                                {datas.attempt_type ? (
                                  <div className="tagButton GoodCss">
                                    Best Attempt
                                  </div>
                                ) : (
                                  'Not Best Attempt'
                                )}
                              </td>
                              <td>{datas.attemp_numer}</td>
                              <td>
                                {datas.level === 'GENIUS' ? (
                                  <div className="tagButton Genius">GENIUS</div>
                                ) : datas.level === 'MASTER' ? (
                                  <div className="tagButton Master">MASTER</div>
                                ) : datas.level === 'STARTER' ? (
                                  <div className="tagButton Starter">
                                    STARTER
                                  </div>
                                ) : (
                                  <div className="tagButton Challenger">
                                    CHALLENGER
                                  </div>
                                )}
                              </td>
                              <td>
                                {datas.level_attempt_type ? (
                                  <div className="tagButton GoodCss">
                                    First Time Crossed
                                  </div>
                                ) : (
                                  'Already Crossed'
                                )}
                              </td>
                              <td>
                                <span>#{datas.leaderboard_rank}</span>
                              </td>
                              <td>{datas.consistency} days</td>
                            </tr>
                          )
                        })
                      : null}

                    <tr>
                      <td>
                        <span>#3</span>
                      </td>
                      <td>09-08-2022</td>
                      <td>Akash Yadav</td>
                      <td>Add 2 digits</td>
                      <td>50/60</td>
                      <td>Best Attempt</td>
                      <td>3</td>
                      <td>Genius</td>
                      <td>Crossed First Time</td>
                      <td>
                        <span>#5</span>
                      </td>
                      <td>6 days</td>
                    </tr>
                    <tr>
                      <td>
                        <span>#3</span>
                      </td>
                      <td>09-08-2022</td>
                      <td>Akash Yadav</td>
                      <td>Add 2 digits</td>
                      <td>50/60</td>
                      <td>Best Attempt</td>
                      <td>3</td>
                      <td>Genius</td>
                      <td>Crossed First Time</td>
                      <td>
                        <span>#5</span>
                      </td>
                      <td>6 days</td>
                    </tr>
                    <tr>
                      <td>
                        <span>#3</span>
                      </td>
                      <td>09-08-2022</td>
                      <td>Akash Yadav</td>
                      <td>Add 2 digits</td>
                      <td>50/60</td>
                      <td>Best Attempt</td>
                      <td>3</td>
                      <td>Genius</td>
                      <td>Crossed First Time</td>
                      <td>
                        <span>#5</span>
                      </td>
                      <td>6 days</td>
                    </tr>
                    <tr>
                      <td>
                        <span>#3</span>
                      </td>
                      <td>09-08-2022</td>
                      <td>Akash Yadav</td>
                      <td>Add 2 digits</td>
                      <td>50/60</td>
                      <td>Best Attempt</td>
                      <td>3</td>
                      <td>Genius</td>
                      <td>Crossed First Time</td>
                      <td>
                        <span>#5</span>
                      </td>
                      <td>6 days</td>
                    </tr>
                    <tr>
                      <td>
                        <span>#3</span>
                      </td>
                      <td>09-08-2022</td>
                      <td>Akash Yadav</td>
                      <td>Add 2 digits</td>
                      <td>50/60</td>
                      <td>Best Attempt</td>
                      <td>3</td>
                      <td>Genius</td>
                      <td>Crossed First Time</td>
                      <td>
                        <span>#5</span>
                      </td>
                      <td>6 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

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
