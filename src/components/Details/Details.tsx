import React from "react";
import { Button, SearchBar } from "@utd-argo/ux-master-library";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function Details(props: any) {
  //handle props after setting stuff up
  //{console.log(props.data)}
  return (
    <div>
      {/* header can't handle custom things inside of it? */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar>
        
        <Box display="flex" gap={20}>
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
          <Typography variant="body2" component="body2" mt={1.5} color="red">
            -1.19 (-1.24%)
          </Typography>
          </Box>

          {/* second section */}
          <Box display="flex" gap={5}>
            <Button label="Buy" variant="primary" />
            <Button label="Sell" variant="primary-danger" />
            <SearchBar />
          </Box>
        </Box>
           
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Details;
