import React, { useEffect, useState } from 'react'
import QuizApi from 'src/api/Quiz'
import { Badge } from '@material-ui/core'
import {
  Email,
  Book,
  ArrowDropDownRounded,
  ArrowDropUpRounded,
} from '@material-ui/icons'

import Pagination from '@mui/material/Pagination'
import Selector from '@components/Elements/selector'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
} from '@material-ui/core'
import { DemoDataApi } from '@components/interfaces/dashboardinterface'
import { DemoDataCover } from '@components/interfaces/dashboardinterface'
import Demo from '@components/Demo/Demo'
import Navbar from './navbar'
import { SelectChangeEvent } from '@mui/material'
import { ColumnName } from '@components/constants/democodes'

let OrderData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let ordervalue = 17
const DemoComponent = () => {
  const [windowWidth, setWindowWidth] = useState(1400)
  const [filterSort, setFilterSort] = useState<string>('')
  const [dataCount, setDataCount] = useState(0)
  const [DemoOpen, setDemoOpen] = useState(false)
  const [offsetValue, setOffsetValue] = useState(0)
  const setOffset = (event: SelectChangeEvent, value: number) => {
    setOffsetValue((value - 1) * 10)
    console.log(event)
  }
  function ManageOrdervalue(value: number) {
    const InitialValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    InitialValue[value] = (OrderData[value] + 1) % 2
    OrderData = InitialValue
    ordervalue = value
    getData()
  }
  const filterSelector = [
    { value: 'serial_No', name: 'Serial No' },
    { value: 'date', name: 'Date' },
    { value: 'name', name: 'St Name' },
    { value: 'ac_Name', name: 'Activity Name' },
    { value: 'score', name: 'Score' },
    { value: 'at_Type', name: 'Attempt Type' },
    { value: '10', name: 'Attempt Number' },
  ]
  const [data, setData] = useState<DemoDataApi[]>([])
  async function getData() {
    const params = {
      search: filterSort,
      sort: '',
      order: 'ASC',
      offset: offsetValue,
      limit: 10,
      orderColumn: ColumnName[ordervalue],
    }
    console.log(ColumnName[ordervalue], ordervalue, 'columname')
    if (OrderData[ordervalue]) {
      params['order'] = 'DESC'
    }
    const url = 'demo/getAll'
    try {
      const data = ((await QuizApi.tableData(
        url,
        params
      )) as unknown) as DemoDataCover
      const pages = Math.ceil(data.data.allDemoDetails[1] / 10)
      setDataCount(pages)
      setData(data.data.allDemoDetails[0])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
    }
    getData()
  }, [offsetValue])
  return (
    <>
      {DemoOpen ? <Demo setDemoOpen={setDemoOpen} /> : null}
      <div className="MainDash">
        <Navbar />
        <div className="MaindashRight">
          <div className="MainDashNavbar">
            <div className="MainDashNavbarCover">
              <div className="MainDashNavbarleft">
                <div className="MainDashFilterSelector">
                  <Selector callback={setFilterSort} data={filterSelector} />
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
                  {windowWidth < 900 ? null : (
                    <button
                      className="BookDemoButton"
                      onClick={() => setDemoOpen(true)}
                    >
                      Book Demo Quiz
                    </button>
                  )}
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
            <div className="MaintableDemoContent">
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        onClick={() => ManageOrdervalue(0)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {OrderData[0] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; ID
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(1)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {OrderData[1] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; P CODE
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(2)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[2] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; P NUMBER
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(3)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[3] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; PARENT NAME
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(4)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[4] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; PARENT GENDER
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(5)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[5] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; PARENT EMAIL
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(6)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[6] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; CHILD NAME
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(7)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[7] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; GRADE
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(8)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[8] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; DEMO COURSE
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(9)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[9] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; TIMEZONE
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(10)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[10] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; DATE
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(11)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[11] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; TIME SLOT
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(12)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[12] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; ATTENDENCE
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(13)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[13] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; IP ADDRESS
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(14)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[14] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; SEND EMAIL
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(15)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[15] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; SESSION ID
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(16)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[16] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; SOURCE
                        </div>
                      </TableCell>
                      <TableCell
                        onClick={() => ManageOrdervalue(17)}
                        align="center"
                      >
                        <div className="TableHeadData">
                          {' '}
                          {OrderData[17] ? (
                            <ArrowDropDownRounded />
                          ) : (
                            <ArrowDropUpRounded />
                          )}{' '}
                          &nbsp; CREATED AT
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell align="center">{row.id}</TableCell>
                        <TableCell align="center">{row.phoneCode}</TableCell>
                        <TableCell align="center">{row.phoneNumber}</TableCell>
                        <TableCell align="center">
                          {row.parentFirstName} {row.parentLastName}
                        </TableCell>
                        <TableCell align="center">{row.parentGender}</TableCell>
                        <TableCell align="center">{row.parentEmail}</TableCell>
                        <TableCell align="center">{row.childName}</TableCell>
                        <TableCell align="center">{row.grade}</TableCell>
                        <TableCell align="center">{row.demoCourse}</TableCell>
                        <TableCell align="center">{row.timezone}</TableCell>
                        <TableCell align="center">
                          {row.dateDay} / {row.dateMonth} / {row.dateYear}
                        </TableCell>
                        <TableCell align="center">{row.timeslot}</TableCell>
                        <TableCell align="center">
                          {row.isAttended === '' ? 'NO' : 'YES'}
                        </TableCell>
                        <TableCell align="center">{row.ipAddress}</TableCell>
                        <TableCell align="center">{row.sendEmail}</TableCell>
                        <TableCell align="center">{row.sessionId}</TableCell>
                        <TableCell align="center">{row.source}</TableCell>
                        <TableCell align="center">{row.createdAt}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="Maintablebottom">
                <Pagination
                  count={dataCount}
                  color="standard"
                  shape="circular"
                  style={{ color: 'white' }}
                  onChange={(e, page) =>
                    setOffset((e as unknown) as SelectChangeEvent, page)
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {windowWidth < 900 ? (
          <button
            className="FloaterBookDemoButton"
            onClick={() => setDemoOpen(true)}
          >
            <Book />
          </button>
        ) : null}
      </div>
    </>
  )
}

export default DemoComponent
