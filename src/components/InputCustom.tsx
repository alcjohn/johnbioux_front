import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

interface InputCustomProps {
  name: string;
  register: any;
  label: string;
  error?: string;
  type?: "email" | "textarea" | "text";
  isRequired?: boolean;
}

const InputCustom: React.FC<InputCustomProps> = ({
  error,
  isRequired,
  label,
  name,
  register,
  type = "text",
}) => {
  return (
    <FormControl mb={2} isRequired={!!isRequired} isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      {type === "textarea" ? (
        <Textarea ref={register} name={name} />
      ) : (
        <Input type={type} name={name} ref={register} />
      )}
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
export default InputCustom;
