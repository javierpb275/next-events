import Link from "next/link";
import classes from "./event-item.module.css";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const theDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const theAddress = location.replace(", ", "\n"); //replaced ', ' for /n (line break)
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{theDate}</time>
          </div>
          <div className={classes.address}>
            <address>{theAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
