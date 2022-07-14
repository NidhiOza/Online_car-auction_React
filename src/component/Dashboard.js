import React from 'react';
import { Chart as ChartJS,BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Navbar from './Navbar';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
)
const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 25],
  }]
}
const DashBoard = () => {
  return (
    <>
    <div className="container">
      <Navbar/>
      <div className="bar mt-3">
          <Bar 
            data={data}
            width={100}
            height={50}
          />
      </div>
    </div>
    
    </>
  )
}

export default DashBoard;