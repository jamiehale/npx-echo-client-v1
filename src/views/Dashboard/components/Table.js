import React from "react";
import styled from 'styled-components';
import UnstyledTable from "@material-ui/core/Table";
import UnstyledTableHead from "@material-ui/core/TableHead";
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableBody from "@material-ui/core/TableBody";

const Table = styled(UnstyledTable)`
  margin-bottom: 0;
  width: 100%;
  max-width: 100%;
  background-color: transparent;
  border-spacing: 0;
  border-collapse: collapse;
`;

const TableHead = styled(UnstyledTableHead)`
  color: ${({theme}) => theme.legacyColours.info[0]};
`;

const TableHeadRow = styled(TableRow)`
  height: ${({theme}) => theme.spacing[7]}px;
`;

const TableHeadCell = styled(TableCell)`
  color: inherit;
`;

const Container = styled.div`
  width: 100%;
  margin-top: ${({theme}) => theme.spacing[3]}px;
  overflow-x: auto;
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
