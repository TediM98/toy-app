import { useEffect } from 'react'
// import { Chart } from '../cmps/chart.jsx'
import { useSelector } from 'react-redux'
import { BarChart } from '../cmps/bar-chart.jsx'
import { chartService } from '../services/chart.service.js'
import { Doughnut } from 'react-chartjs-2'
import { loadToys } from '../store/toy.action.js'
// import { Line } from 'react-chartjs-2'

export function DashBoard() {
  const toys = useSelector((storeState) => storeState.toyModule.toys)

  useEffect(() => {
    loadToys()
  }, [toys])

  const avgPricePerLabel = chartService.getAvgPricePerLabel(toys)
  const data = {
    labels: avgPricePerLabel.labels,
    datasets: [
      {
        label: 'Average Price Per Label',
        data: avgPricePerLabel.values,
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
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'average price per label ',
      },
    },
  }
  return (
    <section
      style={{ backgroundColor: 'white', maxWidth: '35%', margin: 'auto' }}
    >
      <div style={{ maxWidth: '75%' }}>
        <Doughnut data={data} options={options} />
      </div>
      <BarChart toys={toys} />
    </section>
  )
}
