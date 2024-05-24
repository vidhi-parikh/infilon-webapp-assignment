import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";

const UserItem = (props) => {
  const { id, avatar, first_name, last_name, email } = props.user;
  return (
    <>
      <Card key={id}>
        <CardMedia sx={{ height: 140 }} image={avatar} title="green iguana" />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <p>{`${first_name} ${last_name}`}</p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserItem;
