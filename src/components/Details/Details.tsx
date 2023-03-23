import React from "react";
import { Button, SearchBar } from "@utd-argo/ux-master-library";
import { AppBar, Toolbar, Typography, Box, Divider } from "@mui/material";

const data = {
  "Prev Close": "95.78",
  "Today's Open": "95.07",
  "Day's Range": "93.45-95.75",
  "Avg Vol (10-day)": "46.0M",
  "Last (time)": "4:00p ET 02/17/23",
  "Last (size)": "200"
};

function Details(props: any) {
  //handle props after setting stuff up
  //{console.log(props.data)}
  return (
    <div>
      <AppBar
        position="static"
        elevation={1}
        sx={{
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar>
          <Box
            display="flex"
            gap={5}
            sx={{
              justifyContent: "space-between",
              // backgroundColor: "red",
              width: "100%",
            }}
          >
            <Box display="flex">
              <Typography variant="h5" component="h5">
                GOOG
              </Typography>
              <Typography
                ml={1.5}
                mr={1}
                mt={1}
                variant="subtitle1"
                component="subtitle1"
              >
                94.59
              </Typography>
              <Typography
                variant="body2"
                component="body2"
                mt={1.5}
                color="red"
              >
                -1.19 (-1.24%)
              </Typography>
            </Box>

            <Box display="flex" gap={3} alignItems="center">
              <Button label="Buy" variant="primary" />
              <Button label="Sell" variant="primary-danger" />
              <SearchBar variant="contained" className="searchBar" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box display="flex" justifyContent="space-around" mt={4}>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
        >
        {Object.keys(data).map((key) =>
          <Box display="flex" justifyContent="space-between" mx={4}>
           <Typography my={1}>{key}</Typography>
           <Typography my={1}>{data[key]}</Typography>
         </Box>
        )}
          
        </Box>

        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box display="flex" justifyContent="space-between" mx={4}>
            <Typography my={1}>Prev Close</Typography>
            <Typography my={1}>95.78</Typography>
          </Box>
          <Divider variant="middle" />

          <Box display="flex" justifyContent="space-between" mx={4}>
            <Typography my={1}>Prev Close</Typography>
            <Typography my={1}>95.78</Typography>
          </Box>
          <Divider variant="middle" />

          <Box display="flex" justifyContent="space-between" mx={4}>
            <Typography my={1}>Prev Close</Typography>
            <Typography my={1}>95.78</Typography>
          </Box>
          <Divider variant="middle" />

          <Box display="flex" justifyContent="space-between" mx={4}>
            <Typography my={1}>Prev Close</Typography>
            <Typography my={1}>95.78</Typography>
          </Box>
          <Divider variant="middle" />

          <Box display="flex" justifyContent="space-between" mx={4}>
            <Typography my={1}>Prev Close</Typography>
            <Typography my={1}>95.78</Typography>
          </Box>
          <Divider variant="middle" />

          <Box display="flex" justifyContent="space-between" mx={4}>
            <Typography my={1}>Prev Close</Typography>
            <Typography my={1}>95.78</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Details;
