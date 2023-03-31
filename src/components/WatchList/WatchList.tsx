import React from "react";
import { stocks } from "@/config";
import { Table } from "@utd-argo/ux-master-library";
import { Column } from "@utd-argo/ux-master-library/components/table/Table";

export default function WatchList(props: any) {
  type Stock = {
    Name: string;
    close: number;
    date: string;
    high: number;
    low: number;
    open: number;
    volume: number;
  };

  //table data
  const data: Stock[] = [];
  stocks.forEach((stock) => {
    const currStockData = props.data[stock].data[1200];
    //convert to numbers so they can be sorted
    let temp: Stock = {
      Name: currStockData.Name,
      close: Number(currStockData.close),
      date: currStockData.date,
      high: Number(currStockData.high),
      low: Number(currStockData.low),
      open: Number(currStockData.open),
      volume: Number(currStockData.volume),
    };
    data.push(temp);
  });

  //heading information
  const columns: (Column & {size: number})[] = [
    {
      accessorKey: "Name",
      header: "Ticker",
      size: 50,
    },
    {
      accessorKey: "date",
      header: "Date",
      size: 50,
    },
    {
      accessorKey: "open",
      header: "Open",
      size: 50,
    },
    {
      accessorKey: "high",
      header: "High",
      size: 50,
    },
    {
      accessorKey: "low",
      header: "Low",
      size: 50,
    },
    {
      accessorKey: "close",
      header: "Close",
      size: 50,
    },
    {
      accessorKey: "volume",
      header: "Volume",
      size: 50,
    },
  ];
  
  return (
      <Table columns={columns} data={data} title="Watchlist" density="comfortable"/>
  );
}
