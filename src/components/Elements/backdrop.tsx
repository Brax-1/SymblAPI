import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { BackdropProps } from '@components/interfaces/dashboardinterface'

export default function SimpleBackdrop(props: BackdropProps) {
  return (
    <div>
      <Backdrop sx={{ color: '#fff', zIndex: 10000000 }} open={props.open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}
