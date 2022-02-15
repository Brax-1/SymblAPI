import { Grid } from '@material-ui/core'
import { styled, Typography } from '@mui/material'
import { InputLabel } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Carousel from 'react-material-ui-carousel'
import Slider from 'react-slick'
import InputBase from '@mui/material/InputBase'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { alpha } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Stack from '@mui/material/Stack'

// ------------------------ constants for home page------------------------

export const MyGridCover = styled(Grid)(() => ({
  height: '600px',
  padding: '20px 0px',
}))
export const MyGrid = styled(Grid)(() => ({
  borderRadius: '20px',
}))
export const MyTopography = styled(Typography)(() => ({
  fontWeight: 800,
  marginLeft: '30px',
  color: '#ffffffd9',
  marginTop: '30px',
  marginBottom: '10px',
}))
export const MyHomeBodyCover = styled('div')(() => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'scroll',
}))
export const MyHomeBody = styled('div')(() => ({
  width: '90%',
  height: '100%',
}))
export const Bottomcover = styled('div')(() => ({
  padding: '30px',
  borderRadius: '20px',
  cursor: 'pointer',
}))
export const SkeletonCover = styled('div')(() => ({
  width: '100vw',
  height: '100vh',
  background: '#1c2f5ad4',
  overflow: 'scroll',
  padding: '30px',
}))

// ------------------------ constants for Card Element------------------------

export const MyCard = styled('div')(() => ({
  background:
    'linear-gradient(135deg,rgba(0, 189, 199,0.7),rgba(0, 126, 199,0.7))',
  borderRadius: '10px',
  overflow: 'hidden',
  color: 'white',
}))
export const MyCardContent = styled(CardContent)(() => ({
  height: '10%',
}))
export const MyInputLabel = styled(InputLabel)(() => ({
  color: 'white',
}))

// ------------------------ constants for Crousel Element------------------------

export const MyCrousel = styled(Carousel)(() => ({
  borderRadius: '20px',
  height: '100%',
  boxShadow: '0px 0px 10px -2px black',
  transition: '0.3s',
  '& .css-1f8sh1y': {
    height: '100% !important',
    '& span': {
      width: '100% !important',
    },
  },
  '&:hover': {
    transform: 'scale(1.01)',
  },
}))

// ------------------------ constants for Slick Crousel Element------------------------

export const CardCoverCrousel = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
}))
export const MySlider = styled(Slider)(() => ({
  display: 'flex',
  justifyContent: 'center',
  '& .slick-list': {
    '& .slick-track': {
      '& .slick-slide': {
        display: 'flex',
        justifyContent: 'center',
      },
    },
  },
}))

export const Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 2400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1270,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

// ------------------------ constants for SideBar Element------------------------

const drawerWidth = 240

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

export const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: '#1c2f5ad4',
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...(theme.mixins.toolbar as CSSProperties),
  justifyContent: 'flex-start',
}))

// ------------------------ constants for Skeleton Element------------------------

export const StackSkeletonCover = styled(Stack)(() => ({
  padding: '20px',
}))
