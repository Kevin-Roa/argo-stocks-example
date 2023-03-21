import React from 'react'
import Chart from '@/components/Diversification/Chart'
import { StockData, Stocks, StocksReference, StockValues } from '@/config'
import { stocks } from '@/config'

interface DiversificationProps {
    data: StocksReference
}

const Diversification = (props: DiversificationProps) => {
    const chartData = {} as {
        [key in Stocks]?: number
    }

    const getSliceSizes = () => {
        const divs = Array(stocks.length)
        let total = 0
        for (let i = 0; i < stocks.length; i++) {
            divs[i] = Math.random()
            total += divs[i]
        }
        return divs.map(item => 100 * (item / total))
    }

    const slices = getSliceSizes()

    // @ts-ignore
    Object.entries(props.data).map(([key, _]: [Stocks, StockValues], index) => {
        chartData[key] = slices[index]
    })

    console.log(chartData)
    return (
        <div className="diversification-wrapper">
            <Chart data={chartData} />
        </div>
    )
}

export default Diversification