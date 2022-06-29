import React from "react";
import {Box} from "@chakra-ui/react";

import Navbar from "./common/Navbar";

const App: React.FC = () => {
  // TODO: Consider changing the background color to neutral white
  return (
    <Box backgroundColor="neutral.plate_white" minH="100vh">
      <Navbar />
    </Box>
  );
};

export default App;
