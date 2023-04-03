import Papa, { ParseResult } from 'papaparse';
import type { StockData, Stocks, StocksReference } from '@/config';
import { stocks } from '@/config';

const useReadCSV = (setHook: (arg0: StocksReference) => void) => {
	const stockData: StocksReference = {};

	Promise.all(
		[...stocks].map(
			(stock) =>
				new Promise((resolve, reject) =>
					Papa.parse(`./data/stocks/${stock}_data.csv`, {
						header: true,
						download: true,
						skipEmptyLines: true,
						delimiter: ',',
						complete: resolve, // Resolve each promise
						error: reject
					})
				)
		)
	)
		.then((results) => {
			// @ts-ignore
			results.forEach((result: ParseResult<StockData>, index) => {
				stockData[stocks[index]] = result;
			});
			setHook(stockData);
		})
		.catch((err) => console.log('Something went wrong:', err));
	return stockData;
};

export default useReadCSV;
