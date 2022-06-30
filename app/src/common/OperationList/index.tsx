import {List, ListItem, Stack, Text} from "@chakra-ui/react";
import {MdOutlineModeEdit, MdDeleteOutline} from "react-icons/md";

import {gradients} from "../../theme";
import GradientButton from "../Button";

const OperationList = () => {
  const operationAmount = 456.78;
  const operationAmountStyle = operationAmount > 0 ? "brand.green.900" : "accent";

  return (
    <List>
      <ListItem
        _hover={{
          bgGradient: gradients.pink_light,
        }}
        borderRadius="md"
      >
        <Stack direction="row" justifyContent="space-between" px={5} py={3}>
          <Stack justifyContent="space-between">
            <Text fontSize="md">
              Compra de Verduras y Frutas
              <Text color="neutral.pink_gray" fontSize="md">
                Alimentos
              </Text>
            </Text>
            <Text color="neutral.pink_gray" fontSize="smaller" fontWeight="bold">
              May 20, 2020.
            </Text>
          </Stack>
          <Stack gap={3} justifyContent="space-between">
            <Stack direction="row">
              <GradientButton
                isStrong
                ariaLabel="Editar Operación"
                hasLabel={true}
                icon={<MdOutlineModeEdit />}
              />
              <GradientButton
                isStrong
                ariaLabel="Editar Operación"
                hasLabel={true}
                icon={<MdDeleteOutline />}
              />
            </Stack>
            <Text
              alignSelf="flex-end"
              color={operationAmountStyle}
              fontSize="xl"
            >{`$${operationAmount}`}</Text>
          </Stack>
        </Stack>
      </ListItem>
    </List>
  );
};

export default OperationList;
