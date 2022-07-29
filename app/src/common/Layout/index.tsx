import {Container} from "@chakra-ui/react";
import React from "react";

import Navbar from "../Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.md">{children}</Container>
    </>
  );
};

export default Layout;
