import React from "react";
import styled from 'styled-components';
import UnstyledTable from "@material-ui/core/Table";
import UnstyledTableHead from "@material-ui/core/TableHead";
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableBody from "@material-ui/core/TableBody";

const Table = styled(UnstyledTable)`
  marginBottom: 0;
  width: 100%;
  maxWidth: 100%;
  backgroundColor: transparent;
  borderSpacing: 0;
  borderCollapse: collapse;
`;

const TableHead = styled(UnstyledTableHead)`
  color: ${({theme}) => theme.legacyColours.primary[0]};
`;

const TableHeadRow = styled(TableRow)`
  height: ${({theme}) => theme.spacing[7]}px;
`;

const TableHeadCell = styled(TableCell)`
  color: inherit;
`;

const Container = styled.div`
  width: 100%;
  marginTop: ${({theme}) => theme.spacing[3]}px;
  overflowX: auto;
`;

const CustomTable = ({
  columnNames,
  children,
}) => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableHeadRow>
            {columnNames.map((columnName, i) => (
              <TableHeadCell key={i}>
                {columnName}
              </TableHeadCell>
            ))}
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {children}
        </TableBody>
      </Table>
    </Container>
  );
};

export default CustomTable;
