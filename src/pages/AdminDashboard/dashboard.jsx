import React, { useEffect } from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import { Chart } from "react-google-charts";
import { useDispatch, useSelector } from "react-redux";
import { adminDashboard } from "../../features/Dashboard/dashboardSlice";

const backgroundColor = "rgba(87, 127, 222,.02)";

const AdminDashboardPage = () => {

  const { statistics, status } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") dispatch(adminDashboard());
  }, [status, statistics]);

  const churchData = statistics.usersByChurch.map((chuch) => {
    const church = [];
    church.push(chuch.church);
    church.push(parseInt(chuch.userCount));
    return church;
  });

  churchData.unshift(["Church", "Users"]);

 
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item container sm={6} spacing={2} direction="column">
          <Grid item>
            <Paper
              style={{
                padding: "1rem",
                textAlign: "center",
                backgroundColor: `${backgroundColor}`,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Total Users
              </Typography>
              <Typography variant="h4">{statistics.totalUsers}</Typography>
            </Paper>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item sm={6}>
              <Paper
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  backgroundColor: `${backgroundColor}`,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Total Students
                </Typography>
                <Typography variant="h4">{statistics.totalStudents}</Typography>
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  backgroundColor: `${backgroundColor}`,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Total Teacher
                </Typography>
                <Typography variant="h4">{statistics.totalTeachers}</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <Box>
            <Paper
              style={{
                padding: "1rem",
                textAlign: "center",
                backgroundColor: `${backgroundColor}`,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Gender Distribution
              </Typography>
              <Chart
                style={{ backgroundColor: `${backgroundColor}` }}
                width={"100%"}
                height={"170px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Gender", "Count"],
                  ["Male", statistics.totalMaleUsers],
                  ["Female", statistics.totalFemaleUsers],
                ]}
                options={{
                  pieHole: 0.2,
                }}
              />
            </Paper>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "1rem" }}>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            style={{
              padding: "1rem",
              padding: "1rem",
              textAlign: "center",
              backgroundColor: `${backgroundColor}`,
            }}
          >
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
