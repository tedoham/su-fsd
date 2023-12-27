import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ListCardItem from "./ListCardItem";

const DataComponent = ({ data }: any) => {
  return (
    <Grid container spacing={2} mt={5}>
      {data?.map((item: any) => (
        <Grid xs={6} lg={4} key={item.name}>
          <ListCardItem {...{ ...item }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DataComponent;
