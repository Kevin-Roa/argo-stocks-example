import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Stocks } from '@/config'

interface ChartProps {
    data: {
        [key in Stocks]?: number[]
    }
}


const Chart = (props: ChartProps) => {
    const options = {
        chart: {
            type: 'spline',
            reflow: true
        },
        title: {
            text: 'My chart'
        },

        series: Object.entries(props.data).map(([key, value]) => ({
            data: value,
            name: key
        })),

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    chart: {
                        height: 300
                    },
                    subtitle: {
                        text: null
                    },
                    navigator: {
                        enabled: false
                    }
                }
            }]
        }
    }

    return (
        <div className="w-full">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default Chart