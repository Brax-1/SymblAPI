import React, { useEffect, useState } from 'react'
import QuizApi from 'src/api/Quiz'
import {
  Book,
  ArrowDropDownRounded,
  ArrowDropUpRounded,
} from '@material-ui/icons'
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
import { SelectChangeEvent, TablePagination } from '@mui/material'
import { ColumnName } from '@components/constants/democodes'
import moment from 'moment'
let OrderData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let ordervalue = 14
let offsetValue = 0
let rowsPerPage = 10
let searchValue = ''
const DemoComponent = () => {
  const [filterSort, setFilterSort] = useState<string>('')
  const [DemoOpen, setDemoOpen] = useState(false)
  const [CountPage, setCountPage] = useState(0)
  const [Page, setPage] = useState(0)
  const setOffset = (event: SelectChangeEvent, value: number) => {
    offsetValue = value * rowsPerPage
    setPage(value)
    console.log(filterSort, event)
    getData()
  }
  const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
    rowsPerPage = parseInt(event.target.value, 10)
    offsetValue = 0
    setPage(0)
    getData()
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
      searchText: searchValue,
      order: 'ASC',
      offset: offsetValue,
      limit: rowsPerPage,
      orderColumn: ColumnName[ordervalue],
    }
    if (OrderData[ordervalue]) {
      params['order'] = 'DESC'
    }
    const url = 'demo/getAll'
    try {
      const data = ((await QuizApi.tableData(
        url,
        params
      )) as unknown) as DemoDataCover
      setCountPage(data.data.allDemoDetails[1])
      setData(data.data.allDemoDetails[0])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
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
                      onChange={(e) => {
                        searchValue = e.target.value
                      }}
                    />
                  </div>
                  <button className="SearchButton" onClick={() => getData()}>
                    Search
                  </button>
                  <button
                    className="BookDemoButton widthDisplayabove900"
                    onClick={() => setDemoOpen(true)}
                  >
                    Book Demo Quiz
                  </button>
                </div>
              </div>
              <div className="MainDashNavbarRight">
                {/* <Badge badgeContent={4} color="primary">
                  <Email color="action" />
                </Badge> */}
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
                          &nbsp; CODE
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
                          &nbsp; PHONE NUMBER
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
                          {`${row.parentFirstName} ${row.parentLastName}`.slice(
                            0,
                            20
                          )}
                          {`${row.parentFirstName} ${row.parentLastName}`
                            .length > 20
                            ? '...'
                            : null}
                        </TableCell>
                        <TableCell align="center">{row.parentGender}</TableCell>
                        <TableCell align="center">{row.parentEmail}</TableCell>
                        <TableCell align="center">{row.childName}</TableCell>
                        <TableCell align="center">{row.grade}</TableCell>
                        <TableCell align="center">{row.demoCourse}</TableCell>
                        <TableCell align="center">
                          {row.timezone.slice(0, 40)}
                          {row.timezone.length > 40 ? '...' : null}
                        </TableCell>
                        <TableCell align="center">
                          {moment(
                            `${row.dateDay}${row.dateMonth}${row.dateYear}`
                          ).format('DD MMM YYYY')}
                        </TableCell>
                        <TableCell align="center">
                          {row.timeslot % 12 === 0 ? '12' : row.timeslot % 12}
                          {row.timeslot > 12 ? ':00 PM' : ':00 AM'}
                        </TableCell>
                        <TableCell align="center">
                          {row.isAttended === '' ? 'NO' : 'YES'}
                        </TableCell>
                        <TableCell align="center">{row.source}</TableCell>
                        <TableCell align="center">
                          {moment(row.createdAt).format('DD MMM YYYY, hh:mm a')}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="Maintablebottom">
                <TablePagination
                  rowsPerPageOptions={[2, 10, 20, 50, 100]}
                  component="div"
                  count={CountPage}
                  rowsPerPage={rowsPerPage}
                  page={Page}
                  onPageChange={(e, page) =>
                    setOffset((e as unknown) as SelectChangeEvent, page)
                  }
                  onRowsPerPageChange={(e) =>
                    handleChangeRowsPerPage((e as unknown) as SelectChangeEvent)
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <button
          className="FloaterBookDemoButton widthDisplaybelow900"
          onClick={() => setDemoOpen(true)}
        >
          <Book />
        </button>
      </div>
    </>
  )
}

export default DemoComponent
