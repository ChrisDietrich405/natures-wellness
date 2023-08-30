import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/base/MenuItem";
import { Dropdown } from "@mui/base/Dropdown";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
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
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div className={styles.logo}>
        <Image
          width={160}
          height={160}
          src={"/images/logo.png"}
          alt="Nature's Wellness Path logo"
        />
      </div>
      <Divider />
      {navItems?.map((item, index) => (
        <a key={index} href={item.url}>
          {item.title}
        </a>
      ))}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className={styles.container}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className={styles.logo}>
            <Image
              width={160}
              height={160}
              src={"/images/logo.png"}
              alt="Nature's Wellness Path logo"
            />
          </div>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Button key={index}>
                <Link sx={{ color: "#fff" }} href={item.url}>
                  {item.title}
                </Link>
              </Button>
            ))}
            <Dropdown>
              <MenuButton>Services</MenuButton>
              <Menu
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "25px",
                }}
              >
                <MenuItem>
                  <Link href="/services/coachingPackages">
                    Coaching Packages
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/services/wellnessPrograms">
                    Wellness Programs
                  </Link>
                </MenuItem>
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
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

export default DrawerAppBar;
