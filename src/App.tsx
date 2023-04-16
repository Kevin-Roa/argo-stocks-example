import * as React from 'react';
import { Action, Layout, Model, TabNode } from 'flexlayout-react';
import { flexlayout, stocks } from '@/config';
import type { StocksReference } from '@/config';
import {
	TimeSeries,
	Diversification,
	Details,
	AccountSummary,
	WatchList,
	Positions
} from '@/components';
import { Header, LoginPage } from '@utd-argo/ux-master-library';
import useReadCSV from '@/hooks/csvParse';
import './App.css';
import 'flexlayout-react/style/light.css';

const model = Model.fromJson(flexlayout);
const handleAction = (action: Action) => {
	window.dispatchEvent(new Event('resize'));
	return action;
};

function App() {
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	let [stockData, setStockData] = React.useState<StocksReference>({});
	React.useEffect(() => {
		useReadCSV(setStockData);
	}, []);

	const factory = (node: TabNode) => {
		let component = node.getComponent();

		switch (component) {
			case 'time-series':
				return <TimeSeries data={stockData} />;
			case 'diversification':
				return <Diversification data={stockData} />;
			case 'details':
				return <Details data={stockData} />;
			case 'account-summary':
				return <AccountSummary />;
			case 'watch-list':
				return <WatchList data={stockData} />;
			case 'positions':
				return <Positions data={stockData} />;
		}
	};

	return (
		<>
			{/* Login is implemented in a weird way like this because flexlayout doesn't seem to work properly when it has to get rerendered. The login page is essentially just overlayed on the main site and hides when logged in */}
			<div style={{ position: 'absolute', zIndex: '1000' }}>
				{!isLoggedIn && (
					<LoginPage
						logo={
							<h1
								style={{
									fontSize: '4rem',
									fontWeight: 'bold',
									fontFamily: 'Gemunu Libre'
								}}
							>
								Stocks
							</h1>
						}
						bgColor1="#ebffd0"
						bgColor2="#9ad08f"
						accentColor="#09ad01"
						onLogin={() => setIsLoggedIn(true)}
					/>
				)}
			</div>
			<div className="relative">
				<Header variant="global" title="Stocks" />
			</div>
			<div className="relative h-[110%]">
				<Layout model={model} factory={factory} onAction={handleAction} />
			</div>
		</>
	);
}

export default App;
