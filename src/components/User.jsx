import React from "react";
import { useParams } from "react-router-dom";

const User = ({ users }) => {
  const params = useParams();
  console.log(params);

  const { id } = useParams();

  const findUser = users.find((u) => u.id === parseInt(id));
  console.log(findUser);

  return (
    <div>
      hello user {findUser.name}, that has id: {id}
    </div>
  );
};

export default User;
