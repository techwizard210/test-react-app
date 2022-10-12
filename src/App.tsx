import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';

import { Grid } from "@mui/material";
import Chart from './components/Chart';
import Table from './components/Table';

function App() {
  return (
    <div className='App'>
      <Grid container spacing={2}>
        <Chart />
        <Table />
      </Grid>
    </div>
  );
}

export default App;
