import * as React from 'react'
import { Action, Layout, Model, TabNode } from 'flexlayout-react'
import { flexlayout, stocks } from '@/config'
import type { StocksReference } from '@/config'
import { TimeSeries, Diversification, Details, WatchList } from '@/components'
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

        if (component === "time-series") {
            return <TimeSeries data={stockData} />;
        }
        if (component === "diversification") {
            return <Diversification data={stockData} />;
        }
        if(component === "details") {
            return <Details data={stockData}/>
        }
        if(component === "watch-list") {
            return <WatchList data={stockData}/>
        }
    }

    return (
        <Layout
            model={model}
            factory={factory}
            onAction={handleAction} />
    );
}

export default App;