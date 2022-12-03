import React, {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import GridViewIcon from '@mui/icons-material/GridView';
import TableRowsIcon from '@mui/icons-material/TableRows';
import Tooltip from '@mui/material/Tooltip';

const BasicButtonGroup = ({stateChanger}) => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Tooltip title="Grid View">
      <Button onClick={() => {stateChanger("gridView")}}>
        <GridViewIcon />
      </Button>
      </Tooltip>
      <Tooltip title="Table View">
      <Button onClick={() => {stateChanger("tableView")}}>
        <TableRowsIcon />
      </Button>
      </Tooltip>
    </ButtonGroup>
  );
}

export default BasicButtonGroup;
