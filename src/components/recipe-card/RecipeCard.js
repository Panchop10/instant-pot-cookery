import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStartEmpty } from "@fortawesome/free-regular-svg-icons";

import classes from "./RecipeCard.module.css";

function RecipeCard(props) {
  return (
    <div className={classes.card}>
      <img
        className={classes.cardImage}
        src={props.data.url}
        alt={props.data.title}
      />
      <div className={classes.cardInfo}>
        <div className={classes.cardTitle}>{props.data.title}</div>
        <div className={classes.cardRate}>
          {/* Print int number of stars */}
          {Array(Math.floor(props.data.rate))
            .fill(null)
            .map((_, idx) => (
              <FontAwesomeIcon key={idx} icon={faStar} color="#febd69" />
            ))}
          {/* Print half star */}
          {props.data.rate % 1 > 0 ? (
            <FontAwesomeIcon icon={faStarHalfAlt} color="#febd69" />
          ) : null}
          {/* Print empty stars to fill 5 stars */}
          {Array(5 - Math.ceil(props.data.rate))
            .fill(null)
            .map((_, idx) => (
              <FontAwesomeIcon key={idx} icon={faStartEmpty} color="#febd69" />
            ))}
        </div>
        <div className={classes.cardRecipeDetails}>
          <div className={classes.detailsCombo}>
            <span className={classes.detailsTitle}>Prep</span>{" "}
            <span className={classes.detailsInfo}>
              {props.data.preparation_time}
            </span>
          </div>
          <div className={classes.detailsCombo}>
            <span className={classes.detailsTitle}>Cook</span>{" "}
            <span className={classes.detailsInfo}>
              {props.data.cooking_time}
            </span>
          </div>
          <div className={classes.detailsCombo}>
            <span className={classes.detailsTitle}>Ready</span>{" "}
            <span className={classes.detailsInfo}>{props.data.ready_in}</span>
          </div>
          <div className={classes.detailsCombo}>
            <span className={classes.detailsTitle}>Difficulty</span>{" "}
            <span className={classes.detailsInfo}>{props.data.difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
