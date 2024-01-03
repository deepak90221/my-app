import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, phonenumber, relation, purpose, time,studentid) {
    return { name, phonenumber, relation, purpose, time,studentid };
  }
  
  const rows = [
    createData('gowtham', 159865632323, 'parent', 'visiting', '5:20',2200030596),
    createData('ramsai', 159865632323, 'parent', 'visiting', '5:20',2200030596),
    createData('pavan', 159865632323, 'parent', 'visiting', '5:20',2200030596),
    createData('vishnu', 159865632323, 'parent', 'visiting', '5:20',2200030596),
    createData('yeggu', 159865632323, 'parent', 'visiting', '5:20',2200030596),
    createData('sandy', 159865632323, 'parent', 'visiting', '5:20',2200030596), 
  ];

  
  const Visitor = () => {
    return (
        <TableContainer component={Paper}>
          <h2><font face='Times new roman' >Visitor Details:</font></h2>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            
            <TableHead>
              <TableRow>
                <TableCell>name</TableCell>
                <TableCell align="right">phonenumber</TableCell>
                <TableCell align="right">relation&nbsp;</TableCell>
                <TableCell align="right">purpose&nbsp;</TableCell>
                <TableCell align="right">time&nbsp;</TableCell>
                <TableCell align="right">studentid&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.phonenumber}</TableCell>
                  <TableCell align="right">{row.relation}</TableCell>
                  <TableCell align="right">{row.purpose}</TableCell>
                  <TableCell align="right">{row.time}</TableCell>
                  <TableCell align="right">{row.studentid}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
  
  export default Visitor