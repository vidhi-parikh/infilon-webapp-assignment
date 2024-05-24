import { Box } from "@mui/material";
import UserItem from "./UserItem";

// eslint-disable-next-line react/prop-types
const UserList = ({ users }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      gap={4}
      flexWrap="wrap"
    >
      {
        // eslint-disable-next-line react/prop-types
        users?.map((user) => (
          <UserItem user={user} key={user.id} />
        ))
      }
    </Box>
  );
};

export default UserList;
