import styled from "styled-components";

const StyledInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 10px;
`;

export { StyledInput, InputContainer, Label };
