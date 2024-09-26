import { NavLink } from "@remix-run/react";
import { useState } from "react";
import { Navbar, NavbarToggler, Collapse, NavItem, Nav } from "reactstrap";
import { RegionDropdown } from "~/components/RegionDropdown";
import { paths } from "~/constants/paths";
import neracoosLogo from "./neracoos_logo.png";

export function NavBar() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggle = () => setOpen((open) => !open);

  let isProd = false;

  if (typeof window !== "undefined") {
    isProd = window.location.href.includes("://mariners.neracoos.org");
  }

  return (
    <div>
      <Navbar dark={true} expand="md" className="navbar-full">
        <NavLink to={paths.neracoos} className="nav-link ">
          <img src={neracoosLogo} alt="NERACOOS" height={30} />
        </NavLink>
        <NavbarToggler onClick={toggle} className="me-2" />

        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav className="ml-auto" navbar={true}>
            <NavLink to={paths.home} className="nav-link">
              Home
            </NavLink>
            <RegionDropdown />
            {!isProd && (
              <NavItem>
                <NavLink to={paths.models} className="nav-link">
                  Model Viewer
                </NavLink>
              </NavItem>
            )}
            {!isProd && (
              <NavItem>
                <NavLink to={paths.waterLevel.root} className="nav-link">
                  Water Level
                </NavLink>
              </NavItem>
            )}
            <NavItem>
              <NavLink to={paths.about} className="nav-link">
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
