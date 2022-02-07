import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
} from '@material-ui/core'
import { MyTableProps } from '@components/interfaces/dashboardinterface'

export default function MyTable(props: MyTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SERIAL NOh</TableCell>
            <TableCell align="center">DATE</TableCell>
            <TableCell align="center">STUDENT NAME</TableCell>
            <TableCell align="center">ACTIVITY NAME</TableCell>
            <TableCell align="center">SCORE</TableCell>
            <TableCell align="center">ATTEMPT TYPE</TableCell>
            <TableCell align="center">ATTEMPT NUMBER</TableCell>
            <TableCell align="center">LEVEL</TableCell>
            <TableCell align="center">LEVEL ACTIVITY</TableCell>
            <TableCell align="center">LEADERBOARD</TableCell>
            <TableCell align="center">CONSISTENCY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, index) => (
            <TableRow key={row.name}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.activity_name}</TableCell>
              <TableCell align="center">{row.score}</TableCell>
              <TableCell align="center">
                {row.attempt_type ? 'Best Attempt' : null}
              </TableCell>
              <TableCell align="center">{row.attemp_numer}</TableCell>
              <TableCell align="center">{row.level}</TableCell>
              <TableCell align="center">
                {row.level_attempt_type ? 'Crossed 1st Time' : null}
              </TableCell>
              <TableCell align="center">{row.leaderboard_rank}</TableCell>
              <TableCell align="center">{row.consistency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
