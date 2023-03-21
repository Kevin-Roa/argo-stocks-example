import React from 'react'
import { Stocks, StocksReference, StockValues } from '@/config'
import Chart from '@/components/TimeSeries/Chart'
import StockList from '@/components/TimeSeries/StockList'

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
        <div className="time-series-wrapper px-10 flex flex-row flex-nowrap">
            <div className="w-5/6">
                <Chart data={chartData} />
            </div>
            <div className="w-1/6 flex items-center">
                <StockList />
            </div>
        </div>
    )
}

export default TimeSeries