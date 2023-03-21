import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Stocks } from '@/config'

interface ChartProps {
    data: {
        [key in Stocks]?: number
    }
}


const Chart = (props: ChartProps) => {
    const options = {
        chart: {
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },
        title: {
            text: 'My chart'
        },
        series: [{
            name: 'Listings',
            data: Object.entries(props.data).map(([key, value]) => ({
                    y: value,
                    name: key
                }))
            }]
        }

    return (
        <div className="w-full">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default Chart