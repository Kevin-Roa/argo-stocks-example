import React from 'react'
import Chart from '@/components/TimeSeries/Chart'
import { StockData, Stocks, StocksReference, StockValues } from '@/config'

interface TimeSeriesProps {
    data: StocksReference
}

const TimeSeries = (props: TimeSeriesProps) => {
    const chartData = {} as {
        [key in Stocks]?: number[]
    }

    // @ts-ignore
    Object.entries(props.data).map(([key, value]: [Stocks, StockValues]) => {
        chartData[key] = value.data.map(point => parseFloat(point.close))
    })

    return (
        <div className="time-series-wrapper flex flex-row flex-nowrap">
            <div className="w-3/4">
                <Chart data={chartData} />
            </div>
            <div className="w-1/4">
                <p>Storybook Card / List Here</p>
            </div>
        </div>
    )
}

export default TimeSeries