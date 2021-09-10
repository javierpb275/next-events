import classes from "./comment-list.module.css";

const CommentList = () => {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Paco</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Pepe</address>
        </div>
      </li>
    </ul>
  );
};

export default CommentList;
