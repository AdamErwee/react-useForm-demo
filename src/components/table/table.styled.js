import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

export const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  background-color: #f0f0f0;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    text-align: center;
  }
`;
