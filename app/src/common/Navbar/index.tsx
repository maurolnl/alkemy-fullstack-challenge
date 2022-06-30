import {Stack, Box} from "@chakra-ui/react";
import {AiOutlineHome, AiOutlineUserDelete, AiOutlinePlusCircle} from "react-icons/ai";
import {HiOutlineInbox} from "react-icons/hi";

import GradientButton from "../Button";
import Layout from "../Layout";

const Navbar = () => {
  return (
    <Box as="header" backgroundColor="neutral.white">
      <Layout>
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
            />
            <GradientButton
              ariaLabel="Cerrar Sesión"
              hasLabel={true}
              icon={<AiOutlineUserDelete />}
              url="/login"
            />
          </Stack>
        </Stack>
      </Layout>
    </Box>
  );
};

export default Navbar;
