import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { SelectChangeEvent } from '@mui/material'
import { MyInputProps } from '@components/interfaces/dashboardinterface'

export default function InputField(props: MyInputProps) {
  const handleChange = (event: SelectChangeEvent) => {
    props.callback(event.target.value)
  }

  return (
    <Box
      component="form"
      style={{ width: '100%' }}
      noValidate
      autoComplete="off"
    >
      <div>{props.data}</div>
      <TextField
        type={props.type}
        style={{ width: '100%' }}
        id="filled-textarea"
        placeholder={`${props.data}`}
        onChange={(e) => handleChange((e as unknown) as SelectChangeEvent)}
        required
      />
    </Box>
  )
}
