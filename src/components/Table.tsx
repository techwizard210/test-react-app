import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Grid } from "@mui/material";
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-theme-alpine.css';
import fetchPosts from './FetchApi';
import { useQuery } from '@tanstack/react-query';

const Table = () => {

  const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ])

  const { data, error, isError, isLoading } = useQuery('users', fetchPosts);

  return (
    <Grid item sm={12} md={6}>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}>
        </AgGridReact>
      </div>
    </Grid>
  )
}

export default Table;