import * as React from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'
import { DateAndTime } from '@components/interfaces/dashboardinterface'

const CurentDay = new Date()
export default function MaterialUIPickers(props: DateAndTime) {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  )

  const handleChange = (newValue: Date | null) => {
    setValue(newValue)
    props.setDateDay(newValue ? newValue.getDate() : CurentDay.getDate())
    props.setDateMonth(
      newValue ? newValue.getMonth() : CurentDay.getMonth() + 1
    )
    props.setDateYear(
      newValue ? newValue.getFullYear() : CurentDay.getFullYear()
    )
    props.setTimeSlot(newValue ? newValue.getHours() : CurentDay.getFullYear())
    console.log(newValue ? newValue.getMonth() : '')
  }

  return (
    <div>
      <div>Choose Date and Time</div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DateTimePicker
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  )
}
