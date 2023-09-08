import { React } from "react";
import {
  TextField,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateUserData } from "../../features/users/userSlice";

export default function AddUserForm() {
  const userGender = ["Male", "Female"];
  const userRoles = ["Admin", "Teacher", "Student"];
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users.userData);

  const handleFirstNameChange = (e) => {
    const userBody = { ...userData, firstName: e.target.value };
    dispatch(updateUserData(userBody));
  };

  const handleLastNameChange = (e) => {
    const userBody = { ...userData, lastName: e.target.value };
    dispatch(updateUserData(userBody));
  };

  const handleEmailChange = (e) => {
    const userBody = { ...userData, email: e.target.value };
    dispatch(updateUserData(userBody));
  };

  const handlePhoneNumberChange = (e) => {
    const userBody = { ...userData, phoneNumber: e.target.value };
    dispatch(updateUserData(userBody));
  };

  const handleGenderChange = (e) => {
    const userBody = { ...userData, gender: e.target.value };
    dispatch(updateUserData(userBody));
  };

  const handleroleChange = (e) => {
    const userBody = { ...userData, role: e.target.value };
    dispatch(updateUserData(userBody));
  };

  return (
    <>
      <TextField
        autoFocus
        margin="dense"
        id="firstName"
        label="First Name"
        type="text"
        value={userData.firstName}
        onChange={handleFirstNameChange}
        color="info"
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        id="lastName"
        label="Last Name"
        type="text"
        value={userData.lastName}
        onChange={handleLastNameChange}
        color="info"
        fullWidth
      />
      <TextField
        margin="dense"
        id="email"
        label="Email"
        type="email"
        value={userData.email}
        onChange={handleEmailChange}
        color="info"
        fullWidth
      />
      <TextField
        margin="dense"
        id="phoneNumber"
        label="Phone Number"
        type="tel"
        value={userData.phoneNumber}
        onChange={handlePhoneNumberChange}
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
          onChange={handleGenderChange}
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
          onChange={handleroleChange}
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
