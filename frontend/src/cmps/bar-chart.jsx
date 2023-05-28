import React from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'
import { chartService } from '../services/chart.service'

export function BarChart({ toys }) {
  const toyCountByLabel = chartService.getToyCountByLabel(toys)

  const data = {
    labels: toyCountByLabel.labels,
    datasets: [
      {
        label: 'Precent of toys in stock',
        data: toyCountByLabel.values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <div>
      <Bar data={data} />
    </div>
  )
}
