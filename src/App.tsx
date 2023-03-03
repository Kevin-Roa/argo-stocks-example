import * as React from 'react'
import { Action, Layout, Model, TabNode } from 'flexlayout-react'
import { flexlayout, stocks } from '@/config'
import type { StocksReference } from '@/config'
import TimeSeries from '@/components/TimeSeries'
import useReadCSV from '@/hooks/csvParse'
import './App.css'
import 'flexlayout-react/style/light.css'



const model = Model.fromJson(flexlayout);
const handleAction = (action: Action) => {
    window.dispatchEvent(new Event('resize'));
    return action
}

function App() {
    const [stockData, setStockData] = React.useState<StocksReference>({})
    React.useEffect(() => {
        for (let stock of stocks) {
            console.log(stock)
            useReadCSV(stock, stockData, setStockData)
        }
    },[])

    const factory = (node: TabNode) => {
        let component = node.getComponent();
        if (component === "time-series") {
            return <TimeSeries />;
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