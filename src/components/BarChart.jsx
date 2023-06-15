import React, { useState, useEffect } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Profit $',
                data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.4)',
              }, 
        ]
    })
    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                // text: 'Daily Revenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [])

  const data = {
    labels: ['CryptoCurrency Funds', 'Forex Market Funds'],
    datasets: [{
      label: 'Portfolio',
      data: [3, 6],
      backgroundColor: ['#32CD32', '#F4D03F', '#D35400'],
      borderColor: ['#32CD32', '#F4D03F', '#D35400'],
    }]
  }

  return (
    <>
      <div className='w-[22rem] md:w-full relative lg:h-[40vh] h-[20vh] px-5 border rounded-lg bg-white'>
        {/* <Bar data={chartData} options={chartOptions} /> */}
          <Line data={chartData} options={chartOptions} />
        {/* <div className="w-72 h-72 bg-blue-200 ">
          <Doughnut data={data} options={chartOptions} />
        </div> */}
      </div>
    </>
  );
};

export default BarChart;
