import { React } from "react";
import {
  TextField,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../features/users/userSlice";

export default function AddCourseForm(props) {
  const { userData } = props;
  const userGender = ["Male", "Female"];
  const userRoles = ["Admin", "Teacher", "Student"];
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const userBody = { ...userData, [e.target.name]: e.target.value };
    dispatch(updateUserData(userBody));
  };

  return (
    <>
      <TextField
        autoFocus
        margin="dense"
        id="firstName"
        name="firstName"
        label="First Name"
        type="text"
        value={userData.firstName}
        onChange={handleInputChange}
        color="info"
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        id="lastName"
        name="lastName"
        label="Last Name"
        type="text"
        value={userData.lastName}
        onChange={handleInputChange}
        color="info"
        fullWidth
      />
      <TextField
        margin="dense"
        id="email"
        name="email"
        label="Email"
        type="email"
        value={userData.email}
        onChange={handleInputChange}
        color="info"
        fullWidth
      />
      <TextField
        margin="dense"
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        type="tel"
        value={userData.phoneNumber}
        onChange={handleInputChange}
        color="info"
        fullWidth
      />
      <TextField
        margin="dense"
        id="church"
        name="church"
        label="Church"
        type="text"
        value={userData.church}
        onChange={handleInputChange}
        color="info"
        fullWidth
      />
      <FormControl style={{ width: "100%", marginTop: "20px" }}>
        <InputLabel color="info" htmlFor="demo-simple-select-outlined">
          Gender
        </InputLabel>
        <Select
          labelId="user-gender-simple-select-outlined-label"
          id="user-gender-simple-select-outlined"
          name="gender"
          onChange={handleInputChange}
          value={userData.gender}
          label="Gender"
          color="info"
        >
          {userGender.map((gender, index) => (
            <MenuItem value={gender} key={index}>
              {gender}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ width: "100%", marginTop: "20px" }}>
        <InputLabel color="info" htmlFor="demo-simple-select-outlined">
          Role
        </InputLabel>
        <Select
          labelId="user-type-simple-select-outlined-label"
          id="user-type-simple-select-outlined"
          name="role"
          onChange={handleInputChange}
          value={userData.role}
          label="Role"
          color="info"
        >
          {userRoles.map((role, index) => (
            <MenuItem value={role} key={index}>
              {role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
