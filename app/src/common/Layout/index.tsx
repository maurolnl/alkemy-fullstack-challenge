import {Container} from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  return <Container maxW="container.md">{children}</Container>;
};

export default Layout;
