import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AppBar from "../navbar/NavigationBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const drawerWidth = 170;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function AppDrawer(props) {
  const { children } = props;

  let open = useSelector((state) => state.navbar.openDrawer);
  let navigate = useNavigate();
  const sideBarIconsBuilder = () => {
    let sideBarIcons = [
      {
        title: "HOME",
        icon: <HomeIcon color="secondary" />,
        links: "/",
      },
      {
        title: "PROFILE",
        icon: <PersonIcon color="secondary" />,
        links: "/profile",
      },
      {
        title: "COURSES",
        icon: <LibraryBooksIcon color="secondary" />,
        links: "/courses",
      },
      {
        title: "STUDENT",
        icon: <GroupsIcon color="secondary" />,
        links: "/students",
      },
      {
        title: "USERS",
        icon: <PeopleIcon color="secondary" />,
        links: "/users",
      },
      {
        title: "ANALITICS",
        icon: <AnalyticsIcon color="secondary" />,
        links: "/statistics",
      },
    ];
    return sideBarIcons;
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>

        <List>
          {sideBarIconsBuilder().map((icon, index) => (
            <ListItem
              key={icon.title}
              id={index}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => navigate(icon.links)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icon.icon}
                </ListItemIcon>
                <ListItemText
                  primary={icon.title}
                  variant="sideBarVariant"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
