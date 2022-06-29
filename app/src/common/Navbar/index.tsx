import {Stack, Text, Box} from "@chakra-ui/react";

import Layout from "../Layout";

const Navbar = () => {
  return (
    <Box as="header" backgroundColor="neutral.white">
      <Layout>
        <Stack alignItems="center" direction="row" justifyContent="space-between" minH="137px">
          <Stack as="nav" direction="row">
            <Text>Home</Text>
            <Text>List</Text>
          </Stack>
          <Stack direction="row">
            <Text>Crear</Text>
            <Text>Avatar</Text>
          </Stack>
        </Stack>
      </Layout>
    </Box>
  );
};

export default Navbar;
