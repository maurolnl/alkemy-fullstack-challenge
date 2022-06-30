import {Stack, Box, Container, useDisclosure} from "@chakra-ui/react";
import {AiOutlineHome, AiOutlineUserDelete, AiOutlinePlusCircle} from "react-icons/ai";
import {HiOutlineInbox} from "react-icons/hi";

import GradientButton from "../Button";
import LogInDialog from "../LogInDialog";
import OperationForm from "../OperationForm";

const Navbar = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {isOpen: isOpenDialog, onOpen: onOpenDialog, onClose: onCloseDialog} = useDisclosure();

  return (
    <Box as="header" backgroundColor="neutral.white">
      <Container maxW={"container.md"}>
        <Stack alignItems="center" direction="row" justifyContent="space-between" minH="100px">
          <Stack as="nav" direction="row">
            <GradientButton
              ariaLabel="Home"
              hasLabel={true}
              icon={<AiOutlineHome />}
              url="/"
              variant="active"
            />
            <GradientButton
              ariaLabel="Ver Operaciones"
              hasLabel={true}
              icon={<HiOutlineInbox />}
              url="/list-operations"
            />
          </Stack>
          <Stack direction="row">
            <GradientButton
              ariaLabel="Crear Operación"
              hasLabel={true}
              icon={<AiOutlinePlusCircle />}
              onClick={onOpen}
            />
            <GradientButton
              ariaLabel="Cerrar Sesión"
              hasLabel={true}
              icon={<AiOutlineUserDelete />}
              onClick={onOpenDialog}
            />
          </Stack>
        </Stack>
        <OperationForm isOpen={isOpen} onClose={onClose} />
        <LogInDialog isOpen={isOpenDialog} onClose={onCloseDialog} />
      </Container>
    </Box>
  );
};

export default Navbar;
