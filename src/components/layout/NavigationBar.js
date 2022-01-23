import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

import classes from "./NavigationBar.module.css";

function NavigationBar() {
  const NavItem = ({ Icon, text }) => (
    <div className={classes.navbutton}>
      <Icon />
      {text}
    </div>
  );

  const HomeIcon = () => <FontAwesomeIcon icon={faHome} size="2x" />;
  const FavouriteIcon = () => <FontAwesomeIcon icon={faHeart} size="2x" />;
  const MyRecipesIcon = () => (
    <FontAwesomeIcon icon={faClipboardList} size="2x" />
  );

  return (
    <div className={classes.navigation}>
      <div className={classes.logoNavBar}>
        <img src="./logo192.png" width={35} height={35} />
        <span className={classes.spaceBetween}></span>
        <img src="./logo_name.png" width={223} height={35} />
      </div>
      <NavLink
        className={(navData) =>
          navData.isActive
            ? [classes.navitemActive, classes.pushItems].join(" ")
            : [classes.navitem, classes.pushItems].join(" ")
        }
        to="/"
      >
        <NavItem exact text={"Home"} Icon={HomeIcon} />
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? classes.navitemActive : classes.navitem
        }
        to="/favourites"
      >
        <NavItem text={"Favourites"} Icon={FavouriteIcon} />
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? classes.navitemActive : classes.navitem
        }
        to="/my-recipes"
      >
        <NavItem text={"My Recipes"} Icon={MyRecipesIcon} />
      </NavLink>
    </div>
  );
}

export default NavigationBar;
