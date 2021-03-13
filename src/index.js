import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import Approvalcard from "./Approvalcard";

const App = () => {
  return (
    <div className="ui container comments">
      <Approvalcard>
        <h1>Warning !</h1>
        <div>Are you sure !</div>
      </Approvalcard>
      <Approvalcard>
        <CommentDetail
          author="Jagdish"
          date="today 6 pm"
          comment="this is cool"
          image={faker.image.image()}
        />
      </Approvalcard>
      <Approvalcard>
        <CommentDetail
          author="Rahul"
          date="today 3 pm"
          comment="I like it"
          image="http://placeimg.com/640/480/image"
        />
      </Approvalcard>
      <Approvalcard>
        <CommentDetail
          author="Simran"
          date="tommorow 6pm"
          comment="Nice please collab"
          image="http://placeimg.com/640/480/avatar"
        />
      </Approvalcard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
