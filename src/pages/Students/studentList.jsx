// import { React, useState } from "react";
// import {
//   Autocomplete,
//   Box,
//   Button,
//   Divider,
//   Stack,
//   TextField,
//   Typography,
//   Paper,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Dialog,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import AddUserForm from "./addUserForm";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   addUsers,
//   updateUserData,
//   initialState,
//   updateUsers,
//   deleteUser,
// } from "../../features/users/userSlice";
// import Table from "../../component/Tables/Table";

// export default function CourseStudentList() {
//   const [openModal, setOpenModal] = useState(false);
//   const [update, setUpdateModal] = useState(false);
//   const [updateIndex, setUpdateIndex] = useState(null);
//   const dispatch = useDispatch();
//   const userData = useSelector((state) => state.users.userData);
//   const users = useSelector((state) => state.users.users);
//   const columns = [
//     {
//       field: "firstName",
//       label: "First Name",
//       minWidth: 130,
//       align: "left",
//     },
//     {
//       field: "lastName",
//       label: "Last Name",
//       minWidth: 130,
//       align: "left",
//     },
//     {
//       field: "email",
//       label: "Email",
//       minWidth: 130,
//       align: "left",
//     },
//     {
//       field: "phoneNumber",
//       label: "Phone Number",
//       minWidth: 130,
//       align: "left",
//     },
//     {
//       field: "role",
//       label: "Role",
//       minWidth: 130,
//       align: "left",
//     },
//     {
//       field: "gender",
//       label: "Gender",
//       minWidth: 130,
//       align: "left",
//     },
//     {
//       field: "action",
//       label: "Action",
//       minWidth: 130,
//       align: "left",
//     },
//   ];
//   const handleClose = () => {
//     setOpenModal(false);
//   };

//   const handleModalOpen = () => {
//     setOpenModal(true);
//   };

//   const handleSaveUser = () => {
//     dispatch(addUsers(userData));
//     dispatch(updateUserData(initialState.userData));
//     handleClose();
//   };

//   const handleUserEdit = (e) => {
//     const userIndex = e.currentTarget.id;
//     setUpdateIndex(userIndex);
//     dispatch(updateUserData(users[userIndex]));
//     handleModalOpen();
//     setUpdateModal(true);
//   };

//   const handleDeleteEdit = (e) => {
//     const userIndex = e.currentTarget.id;
//     dispatch(deleteUser(userIndex));
//   };

//   const handleUpdate = () => {
//     dispatch(updateUsers({ index: updateIndex, body: userData }));
//     dispatch(updateUserData(initialState.userData));
//     handleClose();
//     setUpdateIndex(null);
//     setUpdateModal(false);
//   };

//   return (
//     <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
//       <Dialog open={openModal} onClose={handleClose}>
//         <DialogTitle align="center">Add new user</DialogTitle>
//         <DialogContent>
//           <AddUserForm />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} variant="contained" color="secondary">
//             Cancel
//           </Button>
//           {update ? (
//             <Button onClick={handleUpdate} variant="contained" color="info">
//               Update
//             </Button>
//           ) : (
//             <Button onClick={handleSaveUser} variant="contained" color="info">
//               Save
//             </Button>
//           )}
//         </DialogActions>
//       </Dialog>

//       <Typography
//         gutterBottom
//         variant="h5"
//         component="div"
//         sx={{ padding: "15px" }}
//       >
//         Users
//       </Typography>
//       <Divider sx={{ marginBottom: 1 }} />
//       <Box height={40}>
//         <Stack direction="row" spacing={2}>
//           <Autocomplete
//             disablePortal
//             id="filter-box"
//             options={[]}
//             sx={{ width: 300 }}
//             getOptionLabel={(users) => users.role || ""}
//             renderInput={(params) => (
//               <TextField
//                 color="info"
//                 {...params}
//                 size="small"
//                 label="Search Users By Role"
//               />
//             )}
//           />
//           <Typography
//             variant="h6"
//             component={"div"}
//             sx={{ flexGrow: 1 }}
//           ></Typography>
//           <Button
//             variant="contained"
//             startIcon={<AddIcon />}
//             color="secondary"
//             onClick={handleModalOpen}
//           >
//             Add new user
//           </Button>
//         </Stack>
//       </Box>
//       <Divider sx={{ marginTop: 1 }} />
//       <Box>
//         <Table
//           columns={columns}
//           rows={users}
//           editFunction={handleUserEdit}
//           deleteFunction={handleDeleteEdit}
//         />
//       </Box>
//     </Paper>
//   );
// }
