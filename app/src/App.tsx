import React from "react";
import {Box} from "@chakra-ui/react";

import Home from "./pages/home/components/Home";
import Layout from "./common/Layout";

const App: React.FC = () => {
  // TODO: Consider changing the background color to neutral white
  return (
    <Box backgroundColor="neutral.plate_white" minH="100vh">
      <Layout>
        <Home />
      </Layout>
    </Box>
  );
};

export default App;
