import React from "react";
import { useParams } from "react-router-dom";

const TetaZita = ({ zitosVeikla }) => {
  const { id } = useParams();
  console.log(zitosVeikla);

  const veikla = zitosVeikla.find((el) => el.id === parseInt(id));

  return (
    <div>
      <h1>cia yra tetos zitos puslapis</h1>
      <p>{veikla.veikla}</p>
      <img src={veikla.img} alt={veikla.veikla} />
    </div>
  );
};

export default TetaZita;
