import Papa, { ParseResult } from "papaparse"
import type { StockData, StockValues, StocksReference} from '@/config'

const useReadCSV = (stock: string, data: StocksReference, setHook: (arg0: StocksReference) => void) => {
    Papa.parse(`/data/stocks/${stock}_data.csv`, {
        header: true,
        download: true,
        skipEmptyLines: true,
        delimiter: ",",
        complete: (results: ParseResult<StockData>) => {
            setHook({ ...data, [stock]: results })
        }
    })
}

export default useReadCSV