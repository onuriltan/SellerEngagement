import React, {useRef, useEffect, useState} from 'react';
import Chartjs from "chart.js";

const Chart = ({data}) => {
  const chartRef = useRef(null)
  const [chart, setChart] = useState(null)

  const drawChart = (merchants, bgColors) => {
    let ctx = document.querySelector('#myChart').getContext('2d');
    let theChart = new Chartjs(ctx, {
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
        scales: {
          xAxes: [{
            type: 'linear',
            ticks: {
              min: 1
            }
          }],
          yAxes: [{
            type: 'category',
            ticks: {
              min: '4', // value must be exactly how it appears in the labels array
            }
          }]
        }
      }
    });
    setChart(theChart)
  }

  useEffect(() => {
    if (data.length > 0) {
      let merchants = [];
      let bgColors = []
      for (let i = 0; i < data.length; i++) {
        merchants.push(`Merchant ${i + 1}`);
        bgColors.push('rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')')
      }
      if (!chart) {
        drawChart(merchants, bgColors)
      }else {
        chart.destroy()
        drawChart(merchants, bgColors)
      }
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
