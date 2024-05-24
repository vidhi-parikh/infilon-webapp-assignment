// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/slice/userSlice";
import UserList from "./UserList";

const Users = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const render = {
    loading: <h1>Loading</h1>,
    succeeded: <UserList users={users} />,
    failed: <h1>Some error</h1>,
  };

  return (
    <section className="users-container">
      <h2 className="text-center">Users</h2>
      {render[status]}
    </section>
  );
};

export default Users;
