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

  async function SortingData(value: string) {
    let sortedData = data
    if (value === 'date') {
      sortedData = await Promise.all(
        data.sort((x, y) => (x.date < y.date ? -1 : 1))
      )
    } else if (value === 'name') {
      sortedData = await Promise.all(
        data.sort((x, y) => (x.name < y.name ? -1 : 1))
      )
    } else if (value === 'activity_name') {
      sortedData = await Promise.all(
        data.sort((x, y) => (x.activity_name < y.activity_name ? -1 : 1))
      )
    } else if (value === 'score') {
      sortedData = await Promise.all(
        data.sort((x, y) => (x.score < y.score ? -1 : 1))
      )
    } else if (value === 'attempt_type') {
      sortedData = await Promise.all(
        data.sort((x, y) => (x.attempt_type < y.attempt_type ? -1 : 1))
      )
    } else if (value === 'attemp_numer') {
      sortedData = await Promise.all(
        data.sort((x, y) => (x.attemp_numer < y.attemp_numer ? -1 : 1))
      )
    } else if (value === 'level') {
      sortedData = await Promise.all(
        data.sort((x, y) => (x.level < y.level ? -1 : 1))
      )
    } else if (value === 'level_attempt_type') {
      sortedData = await Promise.all(
        data.sort((x, y) =>
          x.level_attempt_type < y.level_attempt_type ? -1 : 1
        )
      )
    } else if (value === 'leaderboard_rank') {
      sortedData = await Promise.all(
        data.sort((x, y) => (x.leaderboard_rank < y.leaderboard_rank ? -1 : 1))
      )
    } else if (value === 'consistency') {
      sortedData = await Promise.all(
        data.sort((x, y) => (x.consistency < y.consistency ? -1 : 1))
      )
    }

    setData(sortedData)
  }

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
                      <th
                        onClick={() => SortingData('serial')}
                        style={{ width: '4%' }}
                      >
                        Serial No <i className="fas fa-sort"></i>
                      </th>
                      <th
                        onClick={() => SortingData('date')}
                        style={{ width: '7%' }}
                      >
                        Date <i className="fas fa-sort"></i>
                      </th>
                      <th
                        onClick={() => SortingData('name')}
                        style={{ width: '13%' }}
                      >
                        S Name <i className="fas fa-sort"></i>
                      </th>
                      <th
                        onClick={() => SortingData('activity_name')}
                        style={{ width: '13%' }}
                      >
                        Activity Name <i className="fas fa-sort"></i>
                      </th>
                      <th
                        onClick={() => SortingData('score')}
                        style={{ width: '5%' }}
                      >
                        Score <i className="fas fa-sort"></i>
                      </th>
                      <th
                        onClick={() => SortingData('attempt_type')}
                        style={{ width: '7%' }}
                      >
                        Attempt Type <i className="fas fa-sort"></i>
                      </th>
                      <th
                        onClick={() => SortingData('attemp_numer')}
                        style={{ width: '6%' }}
                      >
                        Attempt Number <i className="fas fa-sort"></i>
                      </th>
                      <th
                        onClick={() => SortingData('level')}
                        style={{ width: '6%' }}
                      >
                        Level <i className="fas fa-sort"></i>
                      </th>
                      <th
                        onClick={() => SortingData('level_attempt_type')}
                        style={{ width: '9%' }}
                      >
                        Level Activity <i className="fas fa-sort"></i>
                      </th>
                      <th
                        onClick={() => SortingData('leaderboard_rank')}
                        style={{ width: '7%' }}
                      >
                        Leaderboard Rank <i className="fas fa-sort"></i>
                      </th>
                      <th
                        onClick={() => SortingData('consistency')}
                        style={{ width: '5%' }}
                      >
                        Consistency <i className="fas fa-sort"></i>
                      </th>
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
                              <td>{datas.level}</td>
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

// import React, { useEffect, useState } from 'react'
// import QuizApi from 'src/api/Quiz'
// import {
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   Collapse,
//   Badge,
//   Fab,
// } from '@material-ui/core'
// import {
//   Send,
//   ChatBubbleOutlineOutlined,
//   Drafts,
//   Inbox,
//   Settings,
//   OutlinedFlag,
//   ExpandMore,
//   ExpandLess,
//   DeleteForever,
//   AccountBox,
//   Score,
// } from '@material-ui/icons'
// import Pagination from '@mui/material/Pagination'

// interface ApiInnerData {
//   activity_name: string
//   attemp_numer: number
//   attempt_type: boolean
//   consistency: string
//   date: string
//   leaderboard_rank: number
//   level: string
//   level_attempt_type: boolean
//   name: string
//   score: number
// }
// const Dashboard = () => {
//   const [open, setOpen] = React.useState(true)
//   const [opentrash, setOpentrash] = React.useState(true)
//   const handleClick = (callback: (n: boolean) => void, val: boolean) => {
//     callback(!val)
//   }
//   const [data, setData] = useState<ApiInnerData[]>([])
//   const [masterdata, setMasterData] = useState<ApiInnerData[]>([])

//   function SortingData(value: string) {
//     console.log('sorting Data')
//     if (value === 'date') {
//       const sortedData = data.sort((x, y) => (x.date < y.date ? -1 : 1))
//       setData(sortedData)
//     } else if (value === 'name') {
//       const sortedData = masterdata[0].sort((x, y) => (x.name < y.name ? -1 : 1))
//       console.log(sortedData, 'name')
//       setData([])
//       setData(sortedData)
//     } else if (value === 'activity_name') {
//       const sortedData = data.sort((x, y) =>
//         x.activity_name < y.activity_name ? -1 : 1
//       )
//       setData(sortedData)
//     } else if (value === 'score') {
//       const sortedData = data.sort((x, y) => (x.score < y.score ? -1 : 1))
//       setData(sortedData)
//     } else if (value === 'attempt_type') {
//       const sortedData = data.sort((x, y) =>
//         x.attempt_type < y.attempt_type ? -1 : 1
//       )
//       setData(sortedData)
//     } else if (value === 'attemp_numer') {
//       const sortedData = data.sort((x, y) =>
//         x.attemp_numer < y.attemp_numer ? -1 : 1
//       )
//       setData(sortedData)
//     } else if (value === 'level') {
//       const sortedData: ApiInnerData[] = data.sort((x, y) =>
//         x.level < y.level ? -1 : 1
//       )
//       console.log(sortedData, 'datas')
//       setData(sortedData)
//     } else if (value === 'level_attempt_type') {
//       const sortedData = data.sort((x, y) =>
//         x.level_attempt_type < y.level_attempt_type ? -1 : 1
//       )
//       setData(sortedData)
//     } else if (value === 'leaderboard_rank') {
//       const sortedData = data.sort((x, y) =>
//         x.leaderboard_rank < y.leaderboard_rank ? -1 : 1
//       )
//       setData(sortedData)
//     } else if (value === 'consistency') {
//       const sortedData = data.sort((x, y) =>
//         x.consistency < y.consistency ? -1 : 1
//       )
//       setData(sortedData)
//     }
//   }

//   async function getData() {
//     const data = ((await QuizApi.tableData()) as unknown) as ApiInnerData[][]
//     setMasterData(data)
//     setData(data[0])
//   }
//   async function seetData() {
//     const po = await Promise.all(masterdata[0].sort((x, y) => (x.name < y.name ? -1 : 1)))
//     setData(po)
//   }
//   async function emptyD() {
//     setData([])
//   }

//   return (
//     <>
//       <button onClick={() => getData()}>get data</button>
//       <button onClick={() => seetData()}>set data</button>
//       <button onClick={() => emptyD()}>empty data</button>
//       {data !== undefined
//         ? data.map((datas: ApiInnerData, index: number) => {
//           return (
//             <tr key={index}>
//               <td>
//                 <span>#{index + 1}</span>
//               </td>
//               <td>{datas.date}</td>
//               <td>{datas.name}</td>
//               <td>{datas.activity_name}</td>
//               <td>{datas.score}</td>
//               <td>
//                 {datas.attempt_type ? (
//                   <div className="tagButton GoodCss">
//                     Best Attempt
//                   </div>
//                 ) : (
//                   'Not Best Attempt'
//                 )}
//               </td>
//               <td>{datas.attemp_numer}</td>
//               <td>{datas.level}</td>
//               <td>
//                 {datas.level_attempt_type ? (
//                   <div className="tagButton GoodCss">
//                     First Time Crossed
//                   </div>
//                 ) : (
//                   'Already Crossed'
//                 )}
//               </td>
//               <td>
//                 <span>#{datas.leaderboard_rank}</span>
//               </td>
//               <td>{datas.consistency} days</td>
//             </tr>
//           )
//         })
//         : null}
//     </>
//   )
// }

// export default Dashboard
