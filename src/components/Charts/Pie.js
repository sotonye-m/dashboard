import React, {useState} from 'react'
import ReactApexChart from 'react-apexcharts'

function Pie(){

    const [state, setState] = useState({
        
        series: [44, 55, 13, 43, 22],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
    })



  return (
    <div className='Pie'>
        <h3>Sales Report</h3>
            <ReactApexChart options={state.options} series={state.series} type="pie" width={350} height={350}/>
    </div>
  )
}

export default Pie