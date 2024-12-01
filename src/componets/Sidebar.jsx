import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  CssBaseline,
  Toolbar,
  Breadcrumbs,
  Link,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  TextField,
  Divider,
  Avatar,
  Popover,
  Menu,
  MenuItem,
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

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
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#0a1929",
  color: "white",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
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

export default function Sidebar({ menuItems }) {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [notificationAnchor, setNotificationAnchor] = React.useState(null);
  const [userMenuAnchor, setUserMenuAnchor] = React.useState(null);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const handleNotificationClick = (event) => setNotificationAnchor(event.currentTarget);
  const handleNotificationClose = () => setNotificationAnchor(null);

  const handleUserMenuClick = (event) => setUserMenuAnchor(event.currentTarget);
  const handleUserMenuClose = () => setUserMenuAnchor(null);

  const isNotificationOpen = Boolean(notificationAnchor);
  const isUserMenuOpen = Boolean(userMenuAnchor);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={drawerOpen}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 5, ...(drawerOpen && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Breadcrumbs
  aria-label="breadcrumb"
  sx={{
    marginLeft:"-30px",
    flexGrow: 1,
    display: "flex",
    alignItems: "start",
    padding: "5px 10px",
    borderRadius: "12px",
    color: "#ffffff",
    "& .MuiBreadcrumbs-separator": {
      fontWeight: "bold",
    },
  }}
>
            <Link  sx={{
      fontWeight: "bold",
      fontSize: "1rem",
      color: "#64b5f6",
      padding: "5px 10px",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#1976d2",
        color: "#ffffff",
        textDecoration: "none",
      },
    }} underline="hover" color="inherit" href="#">
              Dashboard
            </Link>
            <Typography  sx={{
      fontWeight: "bold",
      fontSize: "1rem",
      padding: "5px 12px",
      borderRadius: "8px",
      color: "#ffffff",
      textTransform: "capitalize",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)", // تأثير ظل للنص
    }} color="textPrimary">Profile</Typography>
          </Breadcrumbs>
          <Box   sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.15)",
              borderRadius: "15px",
              padding: "0 10px",
              width: "300px",
              color: "#fff",
            }}>
              <TextField
              variant="standard"
              placeholder="Search..."
              InputProps={{
                disableUnderline: true,
                sx: { color: "#fff" },
              }}
              sx={{ marginLeft: 1, flex: 1 }}
            />
                          <SearchIcon />
  </Box>
<Box sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
            <Avatar
              alt="Profile"
              src="/path-to-image.jpg"
              onClick={handleUserMenuClick}
              sx={{ cursor: "pointer",                width: 40,
                height: 40,
                marginRight: 1., }}
            />
            <Box sx={{ color: "#fff", marginRight: 2 }}>
              <Typography variant="body2" fontWeight="bold">
                John Doe
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#64b5f6",
                }}
              >
                Admin
              </Typography>
            </Box>
            <Menu
  anchorEl={userMenuAnchor}
  open={isUserMenuOpen}
  onClose={handleUserMenuClose}
 
  sx={{ marginLeft:"-40px" ,width:"300px" }}
  
  PaperProps={{
    sx: {
      background: 'linear-gradient(to bottom, #1e3a56, #0a1929)', // خلفية متدرجة
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)', // ظل مميز
      borderRadius: '12px', // زوايا مستديرة
      color: '#fff', // نص أبيض
      overflow: 'hidden',
      width: '200px', // عرض القائمة
      height: 'auto',  // الطول التلقائي (يمكن تغييره إذا أردت طول ثابت)
      maxHeight: '500px', // أقصى ارتفاع للقائمة
   
    },
  }}
>
  <MenuItem
    onClick={handleUserMenuClose}
    sx={{
      padding: '10px 20px',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#64b5f6', // لون خلفية عند التمرير
        color: '#0a1929', // لون النص عند التمرير
        transform: 'scale(1.05)', // تكبير بسيط
      },
    }}
  >
    <AccountCircleIcon sx={{ marginRight: 1 }} /> {/* أيقونة الحساب */}
    Profile
  </MenuItem>
  <MenuItem
    onClick={handleUserMenuClose}
    sx={{
      padding: '10px 20px',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#64b5f6',
        color: '#0a1929',
        transform: 'scale(1.05)',
      },
    }}
  >
    <SettingsIcon sx={{ marginRight: 1 }} /> {/* أيقونة الإعدادات */}
    Settings
  </MenuItem>
  <MenuItem
    onClick={handleUserMenuClose}
    sx={{
      padding: '10px 20px',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#64b5f6',
        color: '#0a1929',
        transform: 'scale(1.05)',
      },
    }}
  >
    <LogoutIcon sx={{ marginRight: 1 }} /> {/* أيقونة تسجيل الخروج */}
    Logout
  </MenuItem>
</Menu>
            <IconButton
              sx={{
                color: "transparent",
                borderRadius: "50%",
                padding: "8px",
                "& svg": {
                  fill: "none",
                  stroke: "#64b5f6",
                  strokeWidth: 2,
                },
                "&:hover": {
                  backgroundColor: "#1e3a56",
                },
              }}
              onClick={handleNotificationClick}
            >
              <NotificationsIcon />
            </IconButton>
            <Popover
              open={isNotificationOpen}
              anchorEl={notificationAnchor}
              onClose={handleNotificationClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >

 <Box
  sx={{
    padding: 2,
    width: 350,
    background: "linear-gradient(to bottom, #0a1929, #112240)",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
    color: "#ffffff",
    overflow: "hidden",
  }}
>
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#64b5f6",
      textAlign: "center",
    }}
  >
    Notifications
  </Typography>

  <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)", marginBottom: "15px" }} />

  {/* Notification Example 1 */}
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "8px",
      padding: "10px",
      marginBottom: "10px",
      transition: "background 0.3s",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.2)",
      },
    }}
  >
    <Avatar
      sx={{ backgroundColor: "#64b5f6", marginRight: "10px" }}
      alt="User"
    >
      JD
    </Avatar>
    <Box>
      <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#ffffff" }}>
        John Doe
      </Typography>
      <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
        Sent you a message: "Hey, check out the new update!"
      </Typography>
    </Box>
  </Box>

  {/* Notification Example 2 */}
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "8px",
      padding: "10px",
      marginBottom: "10px",
      transition: "background 0.3s",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.2)",
      },
    }}
  >
    <Avatar
      sx={{ backgroundColor: "#f44336", marginRight: "10px" }}
      alt="Alert"
    >
      !
    </Avatar>
    <Box>
      <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#ffffff" }}>
        System Alert
      </Typography>
      <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
        Your password will expire in 3 days. Please update it.
      </Typography>
    </Box>
  </Box>

  {/* Notification Example 3 */}
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "8px",
      padding: "10px",
      marginBottom: "10px",
      transition: "background 0.3s",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.2)",
      },
    }}
  >
    <Avatar
      sx={{ backgroundColor: "#ff9800", marginRight: "10px" }}
      alt="Reminder"
    >
      📅
    </Avatar>
    <Box>
      <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#ffffff" }}>
        Reminder
      </Typography>
      <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
        Meeting with the team at 2:00 PM today.
      </Typography>
    </Box>
  </Box>
</Box>            </Popover>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer  sx={{
              overflow: "hidden", // تعطل أي تمرير غير مرغوب فيه

          "& .MuiDrawer-paper": {
            backgroundColor: "#0a1929",
            color: "#fff",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
            borderRight: "1px solid rgba(255, 255, 255, 0.2)",
          },
        }} variant="permanent" open={drawerOpen}>
          <h2
          style={{
            marginLeft: "35px",
            display: "flex",
            marginTop: "15px",
            position: "absolute",
            color: "#64b5f6",
            fontFamily: "Roboto",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          PFE Manager
        </h2>

        <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon style={{ color: "#64b5f6" }} />
            ) : (
              <ChevronLeftIcon style={{ color: "#64b5f6" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)" }} />
        <List
           sx={{
            bgcolor: "transparent",
            borderRadius: "8px",
            overflow: "hidden",
            color: "#fff",
            padding: "10px 0",
            fontFamily: "Roboto",
          }}>
          {menuItems.map(({ text, icon }) => (
            <ListItem  key={text}
            disablePadding
            onMouseEnter={() => setDrawerOpen(true)}
            onMouseLeave={() => setDrawerOpen(false)}  sx={{ color: "#1976d2" }}>
              <ListItemButton 
              >
                <ListItemIcon 
                 sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "50%",
                  padding: "8px",
                  "& svg": {
                    fill: "none",
                    stroke: "#64b5f6",
                    strokeWidth: 2,
                  },
                }}>{icon}</ListItemIcon>
                <ListItemText  sx={{
                    opacity: open ? 1 : 0,
                    fontWeight: 500,
                    textTransform: "capitalize",
                    letterSpacing: "0.5px",
                    fontSize: "19px !important",
                  }} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ color: "#1976d2" }}>
            <ListItemButton
              // // sx={{
              // //   minHeight: 56,
              // //   px: 2.5,
              // //   bgcolor: "rgba(10, 25, 41, 0.8)",
              // //   borderRadius: "12px",
              // //   "&:hover": {
              // //     bgcolor: "#1e3a56",
              // //     transform: "scale(1.05)",
              // //   },
              // //   transition: "all 0.3s ease",
              // // }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "50%",
                  padding: "8px",
                  "& svg": {
                    fill: "none",
                    stroke: "#64b5f6",
                    strokeWidth: 2,
                  },
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary="Log Out"
                sx={{
                  opacity: open ? 1 : 0,
                  fontWeight: 500,
                  textTransform: "capitalize",
                  letterSpacing: "0.5px",
                  fontSize: "19px !important",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
