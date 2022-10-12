import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Grid } from "@mui/material"

const Chart = () => {
  const options = {
    chart: {
      type: "spline"
    },
    title: {
      text: "My chart"
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  }
  return (
    <Grid item sm={12} md={6}>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </Grid>
  )
}

export default Chart;