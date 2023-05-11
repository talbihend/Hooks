import React from "react";
import { Link, useParams } from "react-router-dom";

const Detail = ({ list }) => {
  const { id } = useParams();
  const newvid = list.find((el) => el.id == id);
  return (
    <div>
      <h1 className="title-form">{newvid.title}</h1>
      <iframe className="trailer-form"
        width="640"
        height="360"
        src={newvid.vid}
        title={newvid.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>{" "}
      <br/>
      <Link to="/">
        <button className="back-to-home">Back to home</button>
      </Link>
    </div>
  );
};

export default Detail;
