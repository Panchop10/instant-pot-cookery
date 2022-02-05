import classes from "./SectionTitle.module.css";

function SectionTitle(props) {
  return (
    <div className={classes.sectionTitle}>
      <div className={classes.horizontalBar}></div>
      <div className={classes.text}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.subtitle}>{props.subtitle}</div>
      </div>
    </div>
  );
}

export default SectionTitle;
