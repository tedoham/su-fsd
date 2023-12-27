import { Skeleton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react'

const fakeData = new Array(8);

const LoadingSkeleton = () => {
  return (
    <Grid container spacing={2} mt={5}>
      {fakeData.map((item) => (
        <Grid xs={6} lg={4} key={item.name}>
            <Skeleton variant="rectangular" width={"100%"} />
        </Grid>
      ))}
    </Grid>
  )
}
export default LoadingSkeleton