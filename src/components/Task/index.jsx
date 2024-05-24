import { Box, Button, Container, TextField, Typography } from "@mui/material";
import useTask from "./hooks/useTask";

const HelloTask = () => {
  const { number, handleChange, handleClick, messages } = useTask();

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={5}
      >
        <TextField
          label="Enter a number"
          variant="outlined"
          value={number}
          onChange={handleChange}
          type="number"
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleClick}>
          Submit
        </Button>
      </Box>
      <Box mt={5}>
        {messages.map((message, index) => (
          <Typography key={index}>{message}</Typography>
        ))}
      </Box>
    </Container>
  );
};

export default HelloTask;
