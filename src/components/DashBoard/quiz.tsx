import React, { useEffect, useState } from 'react'
import QuizApi from 'src/api/Quiz'

import Pagination from '@mui/material/Pagination'
import Selector from '@components/Elements/selector'
import MyTable from '@components/Elements/table'
import { ApiInnerData } from '@components/interfaces/dashboardinterface'
import Navbar from './navbar'

const QuizComponent = () => {
  const [filterSort, setFilterSort] = useState<string>('')
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
    const params = {
      searchText: '',
      order: 'ASC',
      offset: 0,
      limit: 1,
      orderColumn: '',
    }
    const url = 'demo/getAll?offset=0&column=createdAt&order=DESC&limit=10'
    try {
      const data = ((await QuizApi.tableData(
        url,
        params
      )) as unknown) as ApiInnerData[][]
      console.log(data)
      setData([])
    } catch (error) {
      console.log(error)
    }
    console.log(filterSort)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
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
            <div className="MaintableContent">
              <MyTable data={data} />

              <div className="Maintablebottom">
                <Pagination
                  count={2}
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

export default QuizComponent
