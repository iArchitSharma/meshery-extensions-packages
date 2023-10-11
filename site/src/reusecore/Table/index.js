import React from 'react';
import styled from 'styled-components';

export const TD = styled.td`
  font-size: 14px;
  font-weight: normal;
  text-transform: capitalize;
  white-space: nowrap;
  padding: 14px 5px;
`;

export const TableBody = styled.tbody``;

export const TableHeader = styled.thead``;

export const TableRow = styled.tr`
  position: relative;
  border-bottom: 1px solid lightgray;
  color: dark;
  background-color: ${props => (Number(props.id) % 2 ? '#E6FBF7' : 'inherit')};
`;

export const TH = styled.th``;
