import React, {useMemo} from "react";
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import { OpenDirOptions } from "fs";

export default function WatchList(props: any) {
  //TODO: get the stocks dynamically from index
  const stocks = ["AAPL", "MSFT", "AAL", "ABC"];

  //TODO: change everything except name to number data type
  type Stock = {
    Name: string,
    close: string,
    date: string,
    high: string,
    low: string,
    open: string,
    volume: string
  }

  //TODO: change data type before inserting to array for data attributes
  const arr: Stock[] = [];
  stocks.forEach((stock) => {
    arr.push(props.data[stock].data[1200]);
  });

  
  const columns = useMemo<MRT_ColumnDef<Stock>[]>(
    () => [
      {
        accessorKey: 'Name',
        header: 'Ticker',
        size: 50,
      },
      {
        accessorKey: 'close',
        header: 'Close',
        size: 50,
      },
      {
        accessorKey: 'date',
        header: 'Date',
        size: 50,
      },
      {
        accessorKey: 'high',
        header: 'High',
        size: 50,
      },
      {
        accessorKey: 'low',
        header: 'Low',
        size: 50,
      },  
      {
        accessorKey: 'open',
        header: 'Open',
        size: 50,

      },
      {
        accessorKey: 'volume',
        header: 'Volume',
        size: 50,
      },
    ],
    [],
  );

  return (
    <>
      <div>WatchList</div>
      <MaterialReactTable columns={columns} data={arr} initialState={{ density: 'compact'}}/>
    </>
  );
}