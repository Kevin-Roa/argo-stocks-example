import React from 'react'
import Chart from '@/components/Diversification/Chart'
import { StockData, Stocks, StocksReference, StockValues } from '@/config'
import { stocks, slices } from '@/config'

interface DiversificationProps {
    data: StocksReference
}

const Diversification = (props: DiversificationProps) => {
    const chartData = {} as {
        [key in Stocks]?: number
    }

    // @ts-ignore
    Object.entries(props.data).map(([key, _]: [Stocks, StockValues], index) => {
        chartData[key] = slices[index]
    })

    return (
        <div className="diversification-wrapper">
            <Chart data={chartData} />
        </div>
    )
}

export default Diversification