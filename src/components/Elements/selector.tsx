import React, { useState } from 'react'
import { FormControl, MenuItem, Select } from '@material-ui/core'
import { SelectChangeEvent, styled } from '@mui/material'
const MyFormatControls = styled(FormControl)({
  width: '200px',
})
const MySelector = styled(Select)({
  textAlign: 'center',
})
export default function Selector(props: MySelectorProps) {
  const [age, setAge] = useState<string>('Apply Filter')

  const handleChange = (event: SelectChangeEvent) => {
    props.setFilters({ search: '', sort: event.target.value })
    setAge(event.target.value)
  }
  return (
    <MyFormatControls variant="standard">
      <MySelector
        id="demo-simple-select-standard"
        value={age}
        onChange={(e) => handleChange((e as unknown) as SelectChangeEvent)}
      >
        <MenuItem value={'Apply Filter'}>
          <em>No Filter</em>
        </MenuItem>
        <MenuItem value={'serial_No'}>Serial No</MenuItem>
        <MenuItem value={'date'}>Date</MenuItem>
        <MenuItem value={'name'}>St Name</MenuItem>
        <MenuItem value={'ac_Name'}>Activity Name</MenuItem>
        <MenuItem value={'score'}>Score</MenuItem>
        <MenuItem value={'at_Type'}>Attempt Type</MenuItem>
        <MenuItem value={30}>Attempt Number</MenuItem>
      </MySelector>
    </MyFormatControls>
  )
}
interface filterBox {
  search: string
  sort: string
}
interface MySelectorProps {
  setFilters: (n: filterBox) => void
}
