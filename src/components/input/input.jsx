import React from "react";
import { StyledInput, InputContainer, Label } from "./Input.style";

const Input = ({ label, id, name, type, placeholder }) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}:</Label>
      <StyledInput type={type} id={id} name={name} placeholder={placeholder} />
    </InputContainer>
  );
};

export default Input;
