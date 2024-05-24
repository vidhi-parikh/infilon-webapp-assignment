// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import PropTypes from 'prop-types';

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import Iframe from "../Iframe";
import Users from "../Users";

function TabBody(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
     
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Tabs for iframe and users"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <TabBody value={value} index={0}>
        <Iframe />
      </TabBody>
      <TabBody value={value} index={1}>
        <Button onClick={(e) => handleChange(e, 2)}>go to tab 2</Button>
        <Users />
      </TabBody>
      <TabBody value={value} index={2}>
       
      </TabBody>
    </Box>
  );
};

TabBody.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default index;
