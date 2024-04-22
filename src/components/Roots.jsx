import React from "react";
import { Link, Outlet } from "react-router-dom";

const Roots = ({ zitosVeikla }) => {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        {"   "}
        <Link to={"/gallery"}>Gallery</Link>
        {"   "}
        {zitosVeikla.map((el) => (
          <span key={el.id}>
            <Link to={`/zita/${el.id}`}>{el.veikla}</Link>
          </span>
        ))}
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Roots;
