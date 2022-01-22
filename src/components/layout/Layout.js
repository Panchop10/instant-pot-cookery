import NavigationBar from "./NavigationBar";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.main}>
      <NavigationBar />
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

export default Layout;
