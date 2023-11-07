import TourItem from "./TourItem";
import classes from "./AvailableTours.module.css";
import { Fragment } from "react";

const DUMMY_TOURS = [
  {
    id: "m1",
    name: "DTE ENERGY MUSIC THEATRE",
    location: "DETROIT, MI",
    date: "JUL 16",
  },
  {
    id: "m2",
    name: "BUDWEISER STAGE",
    location: "TORONTO,ON",
    date: "JUL 17",
  },
  {
    id: "m3",
    name: "JIGGY LUBE LIVE",
    location: "BRISTOW, VA",
    date: "AUG 16",
  },
  {
    id: "m4",
    name: "AK-CHIN PAVILION",
    location: "PHOENIX, AZ",
    date: "SEP 29",
  },
  {
    id: "m5",
    name: "T-MOBILE ARENA",
    location: "LAS VEGAS, NV",
    date: "DEC 12",
  },
];

const AvailableTours = (props) => {
  const tourList = DUMMY_TOURS.map((tour) => (
    <TourItem
      id={tour.id}
      key={tour.id}
      name={tour.name}
      location={tour.location}
      date={tour.date}
    />
  ));
  return (
    <Fragment>
      <h2 style={{ paddingTop: "5%", textAlign: "center" }}>TOURS</h2>
      <section className={classes.tours}>
        <ul>{tourList}</ul>
      </section>
    </Fragment>
  );
};

export default AvailableTours;
