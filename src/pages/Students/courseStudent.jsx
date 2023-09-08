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
// import AddCourseForm from "./addCourseForm";
// import { useSelector, useDispatch } from "react-redux";

// import {
//   addCourse,
//   deleteCourse,
//   updateCourse,
//   updateCourseData,
//   initialState,
// } from "../../features/courses/courseSlice";
// import Table from "../../component/Tables/Table";

// export default function Courses() {
//   const [openModal, setOpenModal] = useState(false);
//   const [update, setUpdateModal] = useState(false);
//   const [updateIndex, setUpdateIndex] = useState(null);
//   const dispatch = useDispatch();
//   const courseData = useSelector((state) => state.courses.courseData);
//   let courses = useSelector((state) => state.courses.courses);
//   courses = courses.map((course) => {
//     return { ...course, teacherName: course.teacher.name };
//   });

//   const columns = [
//     {
//       field: "name",
//       label: "Name",
//       minWidth: 130,
//       align: "left",
//     },
//     {
//       field: "teacherName",
//       label: "Teacher Name",
//       minWidth: 130,
//       align: "left",
//     },
//     {
//       field: "students",
//       label: "Students",
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
//     dispatch(updateCourseData(initialState.courseData));
//     setOpenModal(false);
//   };

//   const handleModalOpen = () => {
//     setOpenModal(true);
//   };

//   const handleSaveUser = () => {
//     dispatch(addCourse(courseData));
//     dispatch(updateCourseData(initialState.courseData));
//     handleClose();
//   };

//   const handleCourseEdit = (e) => {
//     const courseIndex = e.currentTarget.id;
//     setUpdateIndex(courseIndex);
//     dispatch(updateCourseData(courses[courseIndex]));
//     handleModalOpen();
//     setUpdateModal(true);
//   };

//   const handleDeleteEdit = (e) => {
//     const courseIndex = e.currentTarget.id;
//     dispatch(deleteCourse(courseIndex));
//   };

//   const handleUpdate = () => {
//     dispatch(updateCourse({ index: updateIndex, body: courseData }));
//     dispatch(updateCourseData(initialState.courseData));
//     handleClose();
//     setUpdateIndex(null);
//     setUpdateModal(false);
//   };

//   return (
//     <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
//       <Dialog open={openModal}>
//         {update ? (
//           <DialogTitle align="center">UPDATE COURSE</DialogTitle>
//         ) : (
//           <DialogTitle align="center">ADD NEW COURSE</DialogTitle>
//         )}
//         <DialogContent>
//           <AddCourseForm />
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
//         COURSES
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
//                 label="Fielter Course"
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
//             Add course
//           </Button>
//         </Stack>
//       </Box>
//       <Divider sx={{ marginTop: 1 }} />
//       <Box>
//         <Table
//           columns={columns}
//           rows={courses}
//           editFunction={handleCourseEdit}
//           deleteFunction={handleDeleteEdit}
//           // linkTo="/users"
//         />
//       </Box>
//     </Paper>
//   );
// }
