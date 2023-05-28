import React from 'react'
import {
  RadialLinearScale,
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export function Chart({ toys }) {
  console.log('toys', toys)
  const dataValue = []
  for (let value in toys) {
    dataValue.push([toys[value]])
  }

  const labels = []

  for (let key in toys) {
    labels.push([key])
  }
  const data = {
    labels: [...labels],
    datasets: [
      {
        label: '# of Votes',
        data: [...dataValue],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          //   'rgba(200, 100, 33, 0.2)',
          //   'rgba(150, 200, 80, 0.2)',
          //   'rgba(44, 54, 206, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          //   'rgba(200, 100, 33, 0.2)',
          //   'rgba(150, 200, 80, 0.2)',
          //   'rgba(44, 54, 206, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <section style={{ maxWidth: '50%', margin: 'auto' }}>
      <Doughnut data={data} />
      {/* <PolarArea data={data} /> */}
    </section>
  )
}
