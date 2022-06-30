import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import {createRef} from "react";

import {gradients} from "../../theme";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteDialog: React.FC<Props> = ({isOpen, onClose}) => {
  const cancelRef = createRef<HTMLButtonElement>();

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Eliminar Operación
          </AlertDialogHeader>

          <AlertDialogBody>
            ¿Está seguro de que desea eliminar esta operación? El cambio no puede deshacerse
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} cursor="initial" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              _focus={{
                boxShadow: "0 0 0 2px rgba(224,82,99,1)",
              }}
              _hover={{
                bgGradient: gradients.pink_strong,
              }}
              backgroundColor={"brand.pink.400"}
              cursor="initial"
              ml={3}
              onClick={onClose}
            >
              Eliminar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DeleteDialog;
