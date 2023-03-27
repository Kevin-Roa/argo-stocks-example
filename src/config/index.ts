import { IJsonModel } from 'flexlayout-react'

export type StockData = {
    date: string
    open: string
    high: string
    low: string
    close: string,
    volume: string,
    Name: string
}

export type StockValues = {
    data: StockData[]
}

export const stocks = ["AAPL", "MSFT", "AAL", "ABC"] as const
export type Stocks = typeof stocks[number]

export type StocksReference = {
    [key in Stocks]?: StockValues | undefined
}

export const flexlayout: IJsonModel= {
    global: {"tabEnableFloat": true, "rootOrientationVertical": true, "tabSetMinHeight": 500},
    borders: [],
    layout: {
        type: "row",
        weight: 100,
        children: [
            {
                type: "row",
                weight: 100,
                children: [
                    {
                        type: "tabset",
                        weight: 50,
                        children: [
                            {
                                type: "tab",
                                name: "Time Series",
                                component: "time-series",
                            }
                        ]
                    },
                ]
            },
            {
                type: "row",
                weight: 100,
                children: [
                    {
                        type: "tabset",
                        weight: 50,
                        children: [
                            {
                                type: "tab",
                                name: "Diversification",
                                component: "diversification",
                            }
                        ]
                    },
                    {
                        type: "tabset",
                        weight: 50,
                        width: 825,
                        children: [
                            {
                                type: "tab",
                                name: "Details",
                                component: "details",
                            },
                            {
                                type: "tab",
                                name: "Watch List",
                                component: "button",
                            }
                        ]
                    },
                    {
                        type: "tabset",
                        weight: 50,
                        children: [
                            {
                                type: "tab",
                                name: "Account Summary",
                                component: "accountsummary",
                            }
                        ]
                    },
                ]
            }
        ]
    }
};

