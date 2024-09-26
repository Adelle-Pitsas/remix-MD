import { NavLink } from "@remix-run/react";
import { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { paths } from "~/constants/paths";
import { regionList } from "~/constants/regions";
import { urlPartReplacer } from "~/utils/urls";

export const RegionDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const regions = regionList.map((region, key) => {
    const to = urlPartReplacer(paths.regions.region, ":id", region.slug);
    return (
      <NavLink
        key={key}
        to={to}
        onClick={() => close()}
        className={"nav-link dropdown-item btn"}
      >
        {region.name}
      </NavLink>
    );
  });

  return (
    <Dropdown
      nav={true}
      inNavbar={true}
      isOpen={isDropdownOpen}
      toggle={() => toggle()}
    >
      <DropdownToggle nav={true} caret={true}>
        Regions
      </DropdownToggle>
      <DropdownMenu end={true}>{regions}</DropdownMenu>
    </Dropdown>
  );
};
