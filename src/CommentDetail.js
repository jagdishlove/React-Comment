import React from "react";
const CommentDetail = (props) => {
  
  return (
    <div className="comment" >
      <div className="content">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.image} />
        </a>
               
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
