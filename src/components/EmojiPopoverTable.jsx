import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

function EmojiPopoverTable({ emoji }) {
  if (!emoji) {
    return <></>
  }

  return (
    <TableContainer>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell>{'Glyph:'}</TableCell>
            <TableCell>
              <Typography variant='h2'>{emoji.glyph}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{'Name:'}</TableCell>
            <TableCell>{emoji.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{'Group:'}</TableCell>
            <TableCell>{emoji.group}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{'Subgroup:'}</TableCell>
            <TableCell>{emoji.subGroup}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmojiPopoverTable;
