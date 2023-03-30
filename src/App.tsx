import * as React from 'react'
import { Action, Layout, Model, TabNode } from 'flexlayout-react'
import { flexlayout, stocks } from '@/config'
import type { StocksReference } from '@/config'
import { TimeSeries, Diversification, Details, AccountSummary } from '@/components'
import { Header } from '@utd-argo/ux-master-library'
import useReadCSV from '@/hooks/csvParse'
import './App.css'
import 'flexlayout-react/style/light.css'


const model = Model.fromJson(flexlayout);
const handleAction = (action: Action) => {
    window.dispatchEvent(new Event('resize'));
    return action
}

function App() {
    let [stockData, setStockData] = React.useState<StocksReference>({})
    React.useEffect(() => {
        useReadCSV(setStockData)
    }, [])

    const factory = (node: TabNode) => {
        let component = node.getComponent();

        switch (component) {
            case "time-series":
                return <TimeSeries data={stockData} />
            case "diversification":
                return <Diversification data={stockData} />
            case "details":
                return <Details data={stockData}/>
            case "accountsummary":
                return <AccountSummary />
        }
    }

    return (
        <>
            <Header variant="global" title="Stocks" />
            <div className="relative h-[130%]">
                <Layout
                    model={model}
                    factory={factory}
                    onAction={handleAction} />
            </div>
        </>
    );
}

export default App;