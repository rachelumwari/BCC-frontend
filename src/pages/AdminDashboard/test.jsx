import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import { Chart } from "react-google-charts";

const AdminDashboardPage = () => {
  const userData = {
    totalUsers: 1000,
    maleUsers: 600,
    femaleUsers: 400,
  };

  const churchData = [
    ["Church", "Users"],
    ["Church A", 250],
    ["Church B", 300],
    ["Church C", 200],
    ["Church D", 250],
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item container sm={6} direction="column">
          <Grid item sm={4}>
            <Paper
              elevation={3}
              style={{ padding: "1rem", textAlign: "center" }}
            >
              <Typography variant="h6" gutterBottom>
                Total Users
              </Typography>
              <Typography variant="h4">{userData.totalUsers}</Typography>
            </Paper>
            <Grid item sm={4}>
              <Paper
                elevation={3}
                style={{ padding: "1rem", textAlign: "center" }}
              >
                <Typography variant="h6" gutterBottom>
                  Total Users
                </Typography>
                <Typography variant="h4">{userData.totalUsers}</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid>
            <Grid>
              <Paper elevation={3} style={{ padding: "1rem" }}>
                <Typography variant="h6" gutterBottom>
                  Gender Distribution
                </Typography>
                <Chart
                  width={"100%"}
                  height={"100px"}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Gender", "Count"],
                    ["Male", userData.maleUsers],
                    ["Female", userData.femaleUsers],
                  ]}
                  options={{
                    pieHole: 0.4,
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "1rem" }}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "1rem" }}>
            <Typography variant="h6" gutterBottom>
              Users by Church
            </Typography>
            <Chart
              width={"100%"}
              height={"400px"}
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
              data={churchData}
              options={{
                chart: {
                  title: "Users by Church",
                },
                hAxis: {
                  title: "Total Users",
                  minValue: 0,
                },
                vAxis: {
                  title: "Church",
                },
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboardPage;
