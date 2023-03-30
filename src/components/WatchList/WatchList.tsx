import React, { useMemo } from "react";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import { stocks } from "@/config";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function WatchList(props: any) {
  type Stock = {
    Name: string;
    close: number;
    date: number;
    high: number;
    low: number;
    open: number;
    volume: number;
  };

  const arr: Stock[] = [];
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
    arr.push(temp);
  });

  const columns = useMemo<MRT_ColumnDef<Stock>[]>(
    () => [
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
    ],
    []
  );

  return (
    <div>
      {/* replace with header component */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Watchlist
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <MaterialReactTable
        columns={columns}
        data={arr}
        initialState={{ density: "compact" }}
        muiSearchTextFieldProps={{
          placeholder: "Search Stocks",
        }}
      />
    </div>
  );
}