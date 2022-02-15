import * as React from 'react'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Study from 'src/images/study1.jpg'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import {
  MyCardContent,
  MyCard,
  MyInputLabel,
} from '../contansts/homepageContants'

export default function RecipeReviewCard() {
  return (
    <MyCard sx={{ width: 345, height: 450 }}>
      <CardMedia
        component="img"
        height="65%"
        image={Study.src}
        alt="Paella dish"
      />
      <MyCardContent>
        <Typography variant="body2">Animesh John</Typography>
        <Typography variant="h6">
          Prepare for your first jump on skateboard
        </Typography>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <RemoveRedEyeIcon
              style={{ marginRight: '5px', fontSize: '20px', color: 'white' }}
            />
            <MyInputLabel>53K Views</MyInputLabel>
          </IconButton>
          <IconButton aria-label="share">
            <FiberManualRecordIcon
              style={{ marginRight: '5px', fontSize: '10px', color: 'white' }}
            />
            <MyInputLabel>2 weeks ago</MyInputLabel>
          </IconButton>
        </CardActions>
      </MyCardContent>
    </MyCard>
  )
}
