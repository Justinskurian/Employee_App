import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: "5%" }}>
        <Grid container spacing={3}>
          {data.map((row) => (
            <Grid item xs={12} sm={6} md={4} key={row.id}>
              <Card sx={{ display: "flex" }} style={{ margin: "5%" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    ID: {row.id}
                  </Typography>
                  <Typography component="div" variant="h5">
                    {row.name}
                  </Typography>
                  <Typography component="div" variant="subtitle2">
                    Email : {row.email}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
