import {Heading, Stack, Text} from "@chakra-ui/react";

import {gradients} from "../../../../theme";

const Balance = () => {
  const balance = 45770.56;

  return (
    <Stack bgGradient={gradients.pink_accent} borderRadius="md" justifyContent="center">
      <Stack px={5} py={5}>
        <Text color="neutral.pink_gray" fontSize="large" fontWeight="bold" letterSpacing="1.6px">
          <Heading as="h1" fontSize="large">
            BALANCE
          </Heading>
          <Text
            color={balance > 0 ? "brand.green.900" : "accent"}
            fontSize="4xl"
            fontWeight="medium"
            lineHeight="0.89"
            mt={0}
          >
            {`$${balance}`}
          </Text>
        </Text>
      </Stack>
    </Stack>
  );
};

export default Balance;
