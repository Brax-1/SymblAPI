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
    props.setDateTime({
      dateDay: newValue ? newValue.getDate() : CurentDay.getDate(),
      dateMonth: newValue ? newValue.getMonth() : CurentDay.getMonth() + 1,
      dateYear: newValue ? newValue.getFullYear() : CurentDay.getFullYear(),
      timeSlot: newValue ? newValue.getHours() : 9,
    })
  }

  return (
    <div style={{ width: '100%' }}>
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
