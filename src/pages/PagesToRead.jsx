import React from 'react'
import ReactApexChart from 'react-apexcharts';

const PagesToRead = () => {
  const [state, setState] = React.useState({
          
    series: [{      
      type: 'column',
      data: [440, 505, 414, 671, 227, 337, 657, 345, 654, 986]
    }, {     
      type: 'line',
      data: [23, 42, 35, 27, 43, 65, 30, 47, 57, 88 ]
    }],
    options: {
      chart: {
        height: 550,
        type: 'line',
      },
      stroke: {
        width: [0, 4]
      },      
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },      
      yaxis: [{        
      
      }, {
        opposite: true,        
      }]
    },
  
  
});

  return (
    <section className='my-20'>
      <div className='container bg-[#eee] p-20 rounded-xl'>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="line" height={550} />
          </div>
      </div>
    </section>
  )
}

export default PagesToRead
