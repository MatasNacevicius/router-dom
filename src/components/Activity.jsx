import React from "react";
import { useParams } from "react-router-dom";

const Activity = ({ veiklos }) => {
  const { id } = useParams();

  const findActivity = veiklos.find((u) => u.id === parseInt(id));
  console.log(findActivity);
  return (
    <div>
      Activity: {findActivity.veikla} <br />
      <img src={findActivity.img} alt={findActivity.veikla} />
    </div>
  );
};

export default Activity;
