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
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";
import {useForm} from "react-hook-form";

import {gradients} from "../../theme";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  isEdit?: boolean;
}

type FormData = {
  concept: string;
  type: "income" | "expense";
  amount: number;
  category: string;
};

const OperationForm: React.FC<Props> = ({isOpen, onClose, isEdit}) => {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<FormData>();

  const header = isEdit ? "Editar Operación" : "Nueva Operación";

  const onSubmit = (data: FormData) => {
    console.log(data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton _hover={{backgroundColor: "brand.pink.100"}} />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
              <FormControl isInvalid={errors.type && true}>
                <Stack alignItems="center" direction="row">
                  <FormLabel htmlFor="type" id="type" textAlign="right" width="90px">
                    Tipo
                  </FormLabel>
                  <Select
                    id="type"
                    {...register("type")}
                    _focusVisible={{
                      zIndex: 1,
                      borderColor: "brand.pink.200",
                      boxShadow: "0 0 0 1px #ffc6e0",
                    }}
                  >
                    <option value={"income"}>Ingreso</option>
                    <option value={"expense"}>Egreso</option>
                  </Select>
                </Stack>
                <FormErrorMessage id="type-error" justifyContent="flex-end">
                  {errors.type && errors.type.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.concept && true}>
                <Stack alignItems="center" direction="row">
                  <FormLabel htmlFor="concept" id="concept" textAlign="right" width="90px">
                    Concepto
                  </FormLabel>
                  <Input
                    _focusVisible={{
                      zIndex: 1,
                      borderColor: "brand.pink.200",
                      boxShadow: "0 0 0 1px #ffc6e0",
                    }}
                    id="concept"
                    {...register("concept", {
                      required: "Campo obligatorio",
                      minLength: {value: 3, message: "Longitud mínima debe ser de 3"},
                      maxLength: {value: 30, message: "Longitud máxima debe ser de 30"},
                    })}
                  />
                </Stack>
                <FormErrorMessage id="concept-error" justifyContent="flex-end">
                  {errors.concept && errors.concept.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.category && true}>
                <Stack alignItems="center" direction="row">
                  <FormLabel htmlFor="category" id="category" textAlign="right" width="90px">
                    Categoría
                  </FormLabel>
                  <Input
                    _focusVisible={{
                      zIndex: 1,
                      borderColor: "brand.pink.200",
                      boxShadow: "0 0 0 1px #ffc6e0",
                    }}
                    id="category"
                    {...register("category", {
                      required: "Campo obligatorio",
                      minLength: {value: 3, message: "Longitud mínima debe ser de 3"},
                      maxLength: {value: 60, message: "Longitud máxima debe ser de 60"},
                    })}
                  />
                </Stack>
                <FormErrorMessage id="category-error" justifyContent="flex-end">
                  {errors.category && errors.category.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.amount && true}>
                <Stack alignItems="center" direction="row" justifyContent="flex-end">
                  <FormLabel htmlFor="amount" id="amount" textAlign="right" width="90px">
                    Cantidad
                  </FormLabel>
                  <Input
                    _focusVisible={{
                      zIndex: 1,
                      borderColor: "brand.pink.200",
                      boxShadow: "0 0 0 1px #ffc6e0",
                    }}
                    display="inline-flex"
                    id="amount"
                    type="number"
                    {...register("amount", {
                      required: "Campo obligatorio",
                      min: {value: 1, message: "Debe ser mayor o igual a 1"},
                    })}
                  />
                </Stack>
                <FormErrorMessage id="amount-error" justifyContent="flex-end">
                  {errors.amount && errors.amount.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>

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
              Guardar
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OperationForm;
