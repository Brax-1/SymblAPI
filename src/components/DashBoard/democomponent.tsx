import React, { useEffect, useState } from 'react'
import QuizApi from 'src/api/Quiz'
import { Badge } from '@material-ui/core'
import { Email, Book } from '@material-ui/icons'

import Pagination from '@mui/material/Pagination'
import Selector from '@components/Elements/selector'
import MyTable from '@components/Elements/table'
import { ApiInnerData } from '@components/interfaces/dashboardinterface'
import Demo from '@components/Demo/Demo'
import Navbar from './navbar'

const DemoComponent = () => {
  const [windowWidth, setWindowWidth] = useState(1400)
  const [filterSort, setFilterSort] = useState<string>('')
  const [DemoOpen, setDemoOpen] = useState(false)
  const filterSelector = [
    { value: 'serial_No', name: 'Serial No' },
    { value: 'date', name: 'Date' },
    { value: 'name', name: 'St Name' },
    { value: 'ac_Name', name: 'Activity Name' },
    { value: 'score', name: 'Score' },
    { value: 'at_Type', name: 'Attempt Type' },
    { value: '10', name: 'Attempt Number' },
  ]
  const [data, setData] = useState<ApiInnerData[]>([])
  async function getData() {
    const arr = { search: '', sort: '' }
    arr['search'] = filterSort
    arr['sort'] = ''
    try {
      const data = ((await QuizApi.tableData(
        arr
      )) as unknown) as ApiInnerData[][]
      setData(data[0])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
    }
    getData()
  }, [])
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
                  <button
                    className={`${
                      windowWidth < 900
                        ? 'FloaterBookDemoButton'
                        : 'BookDemoButton'
                    }`}
                    onClick={() => setDemoOpen(true)}
                  >
                    {windowWidth < 900 ? <Book /> : 'Book Demo Quiz'}
                  </button>
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
                  count={3}
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

export default DemoComponent
