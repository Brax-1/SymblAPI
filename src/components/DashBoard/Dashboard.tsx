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

export interface ApiInnerData {
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
interface filterBox {
  search: string
  sort: string
}
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

// async function SortingData(value: string) {
//   let sortedData = data
//   const sortStatusIni = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//   if (value === 'date') {
//     if (sortStatus[1] === 0) {
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.date < y.date ? -1 : 1))
//       )
//     } else if (sortStatus[1] === 1)
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.date < y.date ? 1 : -1))
//       )
//     sortStatusIni[1] = (sortStatus[1] + 1) % 3
//   } else if (value === 'name') {
//     if (sortStatus[2] === 0) {
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.name < y.name ? -1 : 1))
//       )
//     } else if (sortStatus[2] === 1)
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.name < y.name ? 1 : -1))
//       )
//     sortStatusIni[2] = (sortStatus[2] + 1) % 3
//   } else if (value === 'activity_name') {
//     if (sortStatus[3] === 0) {
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.activity_name < y.activity_name ? -1 : 1))
//       )
//     } else if (sortStatus[3] === 1)
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.activity_name < y.activity_name ? 1 : -1))
//       )
//     sortStatusIni[3] = (sortStatus[3] + 1) % 3
//   } else if (value === 'score') {
//     if (sortStatus[4] === 0) {
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.score < y.score ? -1 : 1))
//       )
//     } else if (sortStatus[4] === 1)
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.score < y.score ? 1 : -1))
//       )
//     sortStatusIni[4] = (sortStatus[4] + 1) % 3
//   } else if (value === 'attempt_type') {
//     if (sortStatus[5] === 0) {
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.attempt_type < y.attempt_type ? -1 : 1))
//       )
//     } else if (sortStatus[5] === 1)
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.attempt_type < y.attempt_type ? 1 : -1))
//       )
//     sortStatusIni[5] = (sortStatus[5] + 1) % 3
//   } else if (value === 'attemp_numer') {
//     if (sortStatus[6] === 0) {
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.attemp_numer < y.attemp_numer ? -1 : 1))
//       )
//     } else if (sortStatus[6] === 1)
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.attemp_numer < y.attemp_numer ? 1 : -1))
//       )
//     sortStatusIni[6] = (sortStatus[6] + 1) % 3
//   } else if (value === 'level') {
//     if (sortStatus[7] === 0) {
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.level < y.level ? -1 : 1))
//       )
//     } else if (sortStatus[7] === 1)
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.level < y.level ? 1 : -1))
//       )
//     sortStatusIni[7] = (sortStatus[7] + 1) % 3
//   } else if (value === 'level_attempt_type') {
//     if (sortStatus[8] === 0) {
//       sortedData = await Promise.all(
//         data.sort((x, y) =>
//           x.level_attempt_type < y.level_attempt_type ? -1 : 1
//         )
//       )
//     } else if (sortStatus[8] === 1)
//       sortedData = await Promise.all(
//         data.sort((x, y) =>
//           x.level_attempt_type < y.level_attempt_type ? 1 : -1
//         )
//       )
//     sortStatusIni[8] = (sortStatus[8] + 1) % 3
//   } else if (value === 'leaderboard_rank') {
//     if (sortStatus[9] === 0) {
//       sortedData = await Promise.all(
//         data.sort((x, y) =>
//           x.leaderboard_rank < y.leaderboard_rank ? -1 : 1
//         )
//       )
//     } else if (sortStatus[9] === 1)
//       sortedData = await Promise.all(
//         data.sort((x, y) =>
//           x.leaderboard_rank < y.leaderboard_rank ? 1 : -1
//         )
//       )
//     sortStatusIni[9] = (sortStatus[9] + 1) % 3
//   } else if (value === 'consistency') {
//     if (sortStatus[10] === 0) {
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.consistency < y.consistency ? -1 : 1))
//       )
//     } else if (sortStatus[10] === 1)
//       sortedData = await Promise.all(
//         data.sort((x, y) => (x.consistency < y.consistency ? 1 : -1))
//       )
//     sortStatusIni[10] = (sortStatus[10] + 1) % 3
//   }
//   setData(sortedData)
//   setSortStatus(sortStatusIni)
// }

{
  /* <div className="MaintableContent">
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
                        Date{' '}
                        {sortStatus[1] === 0 ? (
                          <i className="fas fa-sort"></i>
                        ) : sortStatus[1] === 1 ? (
                          <i className="fas fa-sort-up"></i>
                        ) : (
                          <i className="fas fa-sort-down"></i>
                        )}
                      </th>
                      <th
                        onClick={() => SortingData('name')}
                        style={{ width: '13%' }}
                      >
                        S Name{' '}
                        {sortStatus[2] === 0 ? (
                          <i className="fas fa-sort"></i>
                        ) : sortStatus[2] === 1 ? (
                          <i className="fas fa-sort-up"></i>
                        ) : (
                          <i className="fas fa-sort-down"></i>
                        )}
                      </th>
                      <th
                        onClick={() => SortingData('activity_name')}
                        style={{ width: '13%' }}
                      >
                        Activity Name{' '}
                        {sortStatus[3] === 0 ? (
                          <i className="fas fa-sort"></i>
                        ) : sortStatus[3] === 1 ? (
                          <i className="fas fa-sort-up"></i>
                        ) : (
                          <i className="fas fa-sort-down"></i>
                        )}
                      </th>
                      <th
                        onClick={() => SortingData('score')}
                        style={{ width: '5%' }}
                      >
                        Score{' '}
                        {sortStatus[4] === 0 ? (
                          <i className="fas fa-sort"></i>
                        ) : sortStatus[4] === 1 ? (
                          <i className="fas fa-sort-up"></i>
                        ) : (
                          <i className="fas fa-sort-down"></i>
                        )}
                      </th>
                      <th
                        onClick={() => SortingData('attempt_type')}
                        style={{ width: '7%' }}
                      >
                        Attempt Type{' '}
                        {sortStatus[5] === 0 ? (
                          <i className="fas fa-sort"></i>
                        ) : sortStatus[5] === 1 ? (
                          <i className="fas fa-sort-up"></i>
                        ) : (
                          <i className="fas fa-sort-down"></i>
                        )}
                      </th>
                      <th
                        onClick={() => SortingData('attemp_numer')}
                        style={{ width: '6%' }}
                      >
                        Attempt Number{' '}
                        {sortStatus[6] === 0 ? (
                          <i className="fas fa-sort"></i>
                        ) : sortStatus[6] === 1 ? (
                          <i className="fas fa-sort-up"></i>
                        ) : (
                          <i className="fas fa-sort-down"></i>
                        )}
                      </th>
                      <th
                        onClick={() => SortingData('level')}
                        style={{ width: '6%' }}
                      >
                        Level{' '}
                        {sortStatus[7] === 0 ? (
                          <i className="fas fa-sort"></i>
                        ) : sortStatus[7] === 1 ? (
                          <i className="fas fa-sort-up"></i>
                        ) : (
                          <i className="fas fa-sort-down"></i>
                        )}
                      </th>
                      <th
                        onClick={() => SortingData('level_attempt_type')}
                        style={{ width: '9%' }}
                      >
                        Level Activity{' '}
                        {sortStatus[8] === 0 ? (
                          <i className="fas fa-sort"></i>
                        ) : sortStatus[8] === 1 ? (
                          <i className="fas fa-sort-up"></i>
                        ) : (
                          <i className="fas fa-sort-down"></i>
                        )}
                      </th>
                      <th
                        onClick={() => SortingData('leaderboard_rank')}
                        style={{ width: '7%' }}
                      >
                        Leaderboard Rank{' '}
                        {sortStatus[9] === 0 ? (
                          <i className="fas fa-sort"></i>
                        ) : sortStatus[9] === 1 ? (
                          <i className="fas fa-sort-up"></i>
                        ) : (
                          <i className="fas fa-sort-down"></i>
                        )}
                      </th>
                      <th
                        onClick={() => SortingData('consistency')}
                        style={{ width: '5%' }}
                      >
                        Consistency{' '}
                        {sortStatus[10] === 0 ? (
                          <i className="fas fa-sort"></i>
                        ) : sortStatus[10] === 1 ? (
                          <i className="fas fa-sort-up"></i>
                        ) : (
                          <i className="fas fa-sort-down"></i>
                        )}
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
            </div> */
}
