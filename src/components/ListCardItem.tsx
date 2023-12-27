import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const ListCardItem = ({filename, createdAt}: any) => {
  return (
          <Card raised={true} sx={{ width: "100%" }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {filename}
              </Typography>
              <Typography variant="body2">
                {createdAt}
              </Typography>
            </CardContent>
        
          </Card>
  )
}

export default ListCardItem