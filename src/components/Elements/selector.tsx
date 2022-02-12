import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { MySelectorProps } from '@components/interfaces/dashboardinterface'
import { SelectChangeEvent } from '@mui/material'
export default function CountrySelect(props: MySelectorProps) {
  function handleChange(event: SelectChangeEvent) {
    const target = event.target as Element
    const data: string = target.textContent ? target.textContent : ''
    props.callback(data)
  }
  return (
    <div style={{ width: '100%' }}>
      {props.title ? <div>{props.title}</div> : null}
      <Autocomplete
        id="country-select-demo"
        sx={{ width: '100%' }}
        options={props.data}
        defaultValue={props.data.find((v) => v.name)}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box
            key={option?.key}
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...props}
            value={option.value}
          >
            {option.name}
          </Box>
        )}
        onChange={(e) => handleChange((e as unknown) as SelectChangeEvent)}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
            placeholder={props.title}
          />
        )}
      />
    </div>
  )
}
