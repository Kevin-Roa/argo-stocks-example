import React from "react";
import { stocks } from "@/config";
import { Table } from "@utd-argo/ux-master-library";
import { Column } from "@utd-argo/ux-master-library/components/table/Table";

export default function Positions(props: any) {
    type Stock = {
        Name: string;
        date: string;
        high: number;
    };

    //table data
    const data: Stock[] = [];
    stocks.forEach((stock) => {
        const currStockData = props.data[stock].data[1200];
        //convert to numbers so they can be sorted
        let temp: Stock = {
            Name: currStockData.Name,
            date: currStockData.date,
            high: Number(currStockData.high),
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
            accessorKey: "high",
            header: "High",
            size: 50,
        },
    ];

    return (
        <Table columns={columns} data={data} title="Positions" density="comfortable"/>
    );
}
