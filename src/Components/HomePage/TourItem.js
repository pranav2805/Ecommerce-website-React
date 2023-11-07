import classes from "./TourItem.module.css";

const TourItem = (props) => {
  return (
    <li key={props.id}>
      <div className={classes["item-info"]}>
        <div className={classes["item-details"]}>
          <span className={classes["item-date"]}>{props.date}</span>
          <span className={classes["item-location"]}>{props.location} </span>
          <span className={classes["item-name"]}>{props.name}</span>
          <button className={classes["buy-button"]}>Buy Tickets</button>
        </div>
      </div>
    </li>
  );
};

export default TourItem;
