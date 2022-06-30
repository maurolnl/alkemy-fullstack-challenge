import {Box, Stack, Heading} from "@chakra-ui/react";

import OperationList from "../../../common/OperationList";

import Balance from "./Balance";

const Home = () => {
  return (
    <Box as="main" minH="100%">
      <Stack gap={10} mt={12}>
        <Balance />
        <Stack spacing={5}>
          <Heading
            color="neutral.pink_gray"
            fontSize="large"
            fontWeight="bold"
            letterSpacing="1.6px"
            lineHeight="1.2"
          >
            OPERACIONES MÁS RECIENTES
          </Heading>
          <OperationList />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;
