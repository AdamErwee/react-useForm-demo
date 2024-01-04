import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useHistory hook for navigation
import FormCard from "../../components/form/form.style";
import Button from "../../components/button/button.jsx";
import {
  StyledTable,
  TableHeader,
  TableRow,
  TableCell,
} from "../../components/table/table.styled";
import fields from "./fields";

// Sample user data (you can replace this with your actual user data)
const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    mobile: "123-456-7890",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    mobile: "987-654-3210",
  },
];

const Users = () => {
  const navigate = useNavigate();

  const handleNewUser = () => {
    navigate("/user/new");
  };

  const handleEditUser = (userId) => {
    navigate(`/user/edit/${userId}`);
  };

  return (
    <FormCard>
      <StyledTable>
        <thead>
          {fields.map(({ label }) => {
            return <TableHeader>{label}</TableHeader>;
          })}
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow key={user.id}>
              {Object.keys(user).map((userValues) => {
                return <TableCell>{user[userValues]}</TableCell>;
              })}
              <TableCell>
                <Button onClick={() => handleEditUser(user.id)}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
      <Button onClick={handleNewUser}>New User</Button>
    </FormCard>
  );
};

export default Users;
