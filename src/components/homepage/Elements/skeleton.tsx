import * as React from 'react'
import Skeleton from '@mui/material/Skeleton'
import { Grid } from '@material-ui/core'
import { StackSkeletonCover } from '../contansts/homepageContants'

export default function VariantSkeleton() {
  return (
    <StackSkeletonCover>
      <Grid container spacing={5}>
        <Grid item sm={4}>
          <Skeleton variant="text" width="100%" height="10vh" />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item sm={8}>
          <Skeleton variant="rectangular" width="100%" height="50vh" />
        </Grid>
        <Grid item sm={4}>
          <Skeleton variant="rectangular" width="100%" height="50vh" />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item sm={4}>
          <Skeleton variant="text" width="100%" height="5vh" />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item sm={3}>
          <Skeleton variant="rectangular" width="80%" height="40vh" />
        </Grid>
        <Grid item sm={3}>
          <Skeleton variant="rectangular" width="80%" height="40vh" />
        </Grid>
        <Grid item sm={3}>
          <Skeleton variant="rectangular" width="80%" height="40vh" />
        </Grid>
        <Grid item sm={3}>
          <Skeleton variant="rectangular" width="80%" height="40vh" />
        </Grid>
      </Grid>
    </StackSkeletonCover>
  )
}
