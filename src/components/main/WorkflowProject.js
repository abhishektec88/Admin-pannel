import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Project1', '80%', '16/02/2021', '16/02/2021','Not-Done'),
  createData('Project1', '80%', '16/02/2021', '16/02/2021','Not-Done'),
  createData('Project1', '80%', '16/02/2021', '16/02/2021','Not-Done'),
  createData('Project1', '80%', '16/02/2021', '16/02/2021','Not-Done'),
  createData('Project1', '80%', '16/02/2021', '16/02/2021','Not-Done'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Workflow() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name of Project</StyledTableCell>
            <StyledTableCell align="right">Improvement</StyledTableCell>
            <StyledTableCell align="right">Starting_Date</StyledTableCell>
            <StyledTableCell align="right">Deadline</StyledTableCell>
            <StyledTableCell align="right">Result</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Improvement}</StyledTableCell>
              <StyledTableCell align="right">{row.Starting_Date}</StyledTableCell>
              <StyledTableCell align="right">{row.Deadline}</StyledTableCell>
              <StyledTableCell align="right">{row.Result}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
