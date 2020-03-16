import React, { FC } from 'react'
import { Radar } from 'react-chartjs-2'

const ChartComponent: FC = () => {
  const data = {
    labels: ['わかりやすさ', '料金', '講師の人柄', 'レベルやスキル', '立地条件'],
    datasets: [
      {
        label: 'chart',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointRadius: 0,
        data: [4, 1, 4, 3, 4]
      }
    ]
  }
  return (
    <>
      <Radar
        data={data}
        options={{
          responsive: true,
          // maintainAspectRatio: false,
          legend: {
            display: false
          },
          scale: {
            pointLabels: {
              fontSize: 14
            },
            ticks: {
              max: 5,
              min: 0,
              stepSize: 1
            }
          },
          plugins: {
            datalabels: {
              display: false
            }
          }
        }}
      />
    </>
  )
}

export default ChartComponent
