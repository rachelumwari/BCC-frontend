import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../features/profile/profileSlice";
import { updateUserProfile } from "../../features/profile/profileSlice";


const UserProfilePage = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    dob: "",
    email: "",
    phoneNumber: "",
    gender: "",
    churchOccupation: "",
    church: "",
  });

  const { profile, status } = useSelector((state) => state.profile);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getUserProfile());
    }
    setUserData(profile);
  }, [profile, status, dispatch]);


  const handleEditProfile = () => {
    setIsEditMode(true);
  };

  const handleSaveProfile = () => {
    setIsEditMode(false);
    dispatch(updateUserProfile(userData));
  };

  const handleInputChange = (field, value) => {
    console.log(value)
    setUserData({ ...userData, [field]: value });
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            color="info"
            value={userData.firstName}
            disabled={!isEditMode}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            color="info"
            fullWidth
            value={userData.lastName}
            disabled={!isEditMode}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="User Name"
            variant="outlined"
            color="info"
            fullWidth
            value={userData.userName}
            disabled={!isEditMode}
            onChange={(e) => handleInputChange("userName", e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Date of Birth"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            fullWidth
            color="info"
            type="date"
            value={userData.dob?userData.dob.split("T")[0]:""}
            disabled={!isEditMode}
            onChange={(e) => handleInputChange("dob", e.target.value)}
            inputProps={{ max: new Date().toISOString().split("T")[0] }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            variant="outlined"
            color="info"
            fullWidth
            value={userData.email}
            disabled={!isEditMode}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Phone Number"
            variant="outlined"
            color="info"
            fullWidth
            value={userData.phoneNumber}
            disabled={!isEditMode}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          />
        </Grid>
        {isEditMode ? (
          <>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel color="info" htmlFor="gender">
                  Gender
                </InputLabel>
                <Select
                  name="gender"
                  color="info"
                  value={userData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Church Occupation"
                variant="outlined"
                color="info"
                fullWidth
                value={userData.churchOccupation}
                disabled={!isEditMode}
                onChange={(e) =>
                  handleInputChange("churchOccupation", e.target.value)
                }
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={6}>
              <TextField
                label="Gender"
                variant="outlined"
                fullWidth
                color="info"
                value={userData.gender}
                disabled={!isEditMode}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Church Occupation"
                variant="outlined"
                fullWidth
                color="info"
                value={userData.churchOccupation}
                disabled={!isEditMode}
                onChange={(e) =>
                  handleInputChange("churchOccupation", e.target.value)
                }
              />
            </Grid>
          </>
        )}
        <Grid item xs={6}>
          <TextField
            label="Church"
            variant="outlined"
            color="info"
            fullWidth
            value={userData.church}
            disabled={!isEditMode}
            onChange={(e) => handleInputChange("church", e.target.value)}
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        {!isEditMode ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleEditProfile}
          >
            Edit Profile
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSaveProfile}
          >
            Save Profile
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default UserProfilePage;
