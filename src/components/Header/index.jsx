import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";

const drawerWidth = 240;
const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Resources",
    url: "/resources",
  },
  {
    title: "Testimonials",
    url: "/testimonials",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Coaching Packages",
    url: "/services/coaching-packages",
    onlyMobile: true,
  },
  {
    title: "Wellness Programs",
    url: "/services/wellnessPrograms",
    onlyMobile: true,
  },
];

const createHandleMenuClick = (menuItem) => {
  return () => {
    console.log(`Clicked on ${menuItem}`);
  };
};

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      className={styles.toggle_container}
    >
      <div className={styles.logo}>
        <Image
          width={200}
          height={30}
          src={"/images/header-logo.png"}
          alt="Nature's Wellness Path logo"
        />
      </div>
      <Divider />
      <List>
        {navItems.map(({ title, url }) => (
          <ListItem key={title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link className={styles.link} href={url}>
                {title}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Dropdown>
        <Menu slots={{ listbox: StyledListbox }}>
          <StyledMenuItem onClick={createHandleMenuClick("Profile")}>
            Profile
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("My account")}>
            Language settings
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Log out")}>
            Log out
          </StyledMenuItem>
        </Menu> */}
      {/* </Dropdown> */}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className={styles.header_container}>
      <CssBaseline />
      <AppBar component="nav" className={styles.container}>
        <Toolbar style={{ height: "70px" }}>
          <IconButton
            color="#67a97b"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className={styles.logo}>
            <Image
              width={200}
              height={60}
              src={"/images/header-logo.png"}
              alt="Nature's Wellness Path logo"
            />
          </div>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            style={{ zIndex: "20000" }}
          >
            {navItems
              .filter((item) => !item.onlyMobile)
              .map(({ title, url }) => (
                <Button key={title} sx={{ color: "#fff" }}>
                  <Link className={styles.link} href={url}>
                    {title}
                  </Link>
                </Button>
              ))}
            <Dropdown style={{ position: "relative" }}>
              <TriggerButton
                className={`${styles.customFont} ${styles.services}`}
              >
                <Typography
                  className={styles.services_link}
                  variant="h6"
                  component="div"
                  sx={{
                    fontFamily: "Roboto,Helvetica,Arial,sansSerif",
                    fontWeight: "500",
                    fontSize: "0.9rem",
                    lineHeight: "1.75",
                  }}
                >
                  SERVICES
                </Typography>
              </TriggerButton>
              <Menu
                slots={{ listbox: StyledListbox }}
                className={styles.sublink_container}
              >
                <StyledMenuItem>
                  <Link
                    href="/services/coaching-packages"
                    className={styles.services_sublinks}
                  >
                    Coaching Packages
                  </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                  <Link
                    href="/services/wellnessPrograms"
                    className={styles.services_sublinks}
                  >
                    Wellness Programs
                  </Link>
                </StyledMenuItem>
              </Menu>
            </Dropdown>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  z-index: 1;
  `
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 8px 14px;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
  `
);

export default DrawerAppBar;
