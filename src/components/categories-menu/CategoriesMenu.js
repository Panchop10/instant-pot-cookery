import classes from "./CategoriesMenu.module.css";

function CategoriesMenu(props) {
  return (
    <div className={classes.categoriesMenu}>
      {props.data.map((item, idx) => (
        <div key={idx} className={classes.category}>
          <img
            className={classes.icon}
            src={"./img/categories/" + item.icon}
            alt={item.title}
          />
          <div className={classes.categoryTitle}>{item.title}</div>
        </div>
      ))}
    </div>
  );
}

export default CategoriesMenu;
