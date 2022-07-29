import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {useForm} from "react-hook-form";

import {gradients} from "../../theme";
import SignUpDialog from "../SignUpDialog";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  username: string;
  password: string;
};

const LogInDialog: React.FC<Props> = ({isOpen, onClose}) => {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<FormData>();
  const {isOpen: isOpenDialog, onOpen: onOpenDialog, onClose: onCloseDialog} = useDisclosure();

  const onSubmit = (data: FormData) => {
    console.log(data);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Iniciar Sesión</ModalHeader>
          <ModalCloseButton _hover={{backgroundColor: "brand.pink.100"}} />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack>
                <FormControl isInvalid={errors.username && true}>
                  <Stack alignItems="center" direction="row">
                    <FormLabel htmlFor="username" id="username" textAlign="right" width="112px">
                      Usuario
                    </FormLabel>
                    <Input
                      _focusVisible={{
                        zIndex: 1,
                        borderColor: "brand.pink.200",
                        boxShadow: "0 0 0 1px #ffc6e0",
                      }}
                      id="username"
                      {...register("username", {
                        required: "Debe ingresar un usuario",
                        minLength: {value: 3, message: "Longitud mínima debe ser de 3"},
                        maxLength: {value: 30, message: "Longitud máxima debe ser de 30"},
                      })}
                    />
                  </Stack>
                  <FormErrorMessage id="username-error" justifyContent="flex-end">
                    {errors.username && errors.username.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.password && true}>
                  <Stack alignItems="center" direction="row">
                    <FormLabel htmlFor="password" id="password" textAlign="right" width="112px">
                      Contraseña
                    </FormLabel>
                    <Input
                      _focusVisible={{
                        zIndex: 1,
                        borderColor: "brand.pink.200",
                        boxShadow: "0 0 0 1px #ffc6e0",
                      }}
                      id="password"
                      type="password"
                      {...register("password", {
                        required: "Debe ingresar una contraseña",
                        minLength: {value: 3, message: "Longitud mínima debe ser de 3"},
                        maxLength: {value: 60, message: "Longitud máxima debe ser de 60"},
                      })}
                    />
                  </Stack>
                  <FormErrorMessage id="password-error" justifyContent="flex-end">
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>

              <Stack alignItems="center" direction="row" justifyContent="space-between" my={3}>
                <Text>
                  ¿No tienes una cuenta?{" "}
                  <Button
                    _hover={{
                      color: "accent",
                    }}
                    color="brand.pink.400"
                    fontWeight="medium"
                    variant="link"
                    onClick={onOpenDialog}
                  >
                    Regístrate
                  </Button>
                </Text>
                <Button
                  _focus={{
                    boxShadow: "0 0 0 2px rgba(224,82,99,1)",
                  }}
                  _hover={{
                    bgGradient: gradients.pink_strong,
                  }}
                  backgroundColor={"brand.pink.400"}
                  cursor="initial"
                  float="right"
                  isLoading={isSubmitting}
                  mb={2}
                  mt={4}
                  type="submit"
                >
                  Iniciar Sesión
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      {isOpenDialog && <SignUpDialog isOpen={isOpenDialog} onClose={onCloseDialog} />}
    </>
  );
};

export default LogInDialog;
