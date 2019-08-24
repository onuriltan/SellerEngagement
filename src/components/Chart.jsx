import React, { useRef, useEffect, useState } from 'react';
import Chartjs from "chart.js";

const Chart = ({data}) => {
  const chartRef = useRef(null)

  useEffect(() => {
    if (data.length > 0) {
      var merchants = [];
      var bgColors = []
      for (let i = 0; i < data.length; i++) {
        merchants.push(`Merchant ${i + 1}`);
        bgColors.push('rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')')
      }
      new Chartjs('myChart', {
        type: "horizontalBar",
        data: {
          //Bring in data
          labels: [...merchants],
          datasets: [
            {
              backgroundColor: [...bgColors],
              label: "Satış Fiyatı (₺)",
              data: [...data]
            }
          ]
        },
        options: {
          //Customize chart options
        }
      });
    }
  }, [data])

  return (
    <div>
        <canvas
          id="myChart"
          ref={chartRef}
        />
    </div>
  );
};

export default Chart;
