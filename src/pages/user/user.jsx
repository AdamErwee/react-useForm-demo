import React from "react";
import FormCard from "../../components/form/form.style";
import Button from "../../components/button/button.jsx";
import Input from "../../components/input/input.jsx";
import fields from "./fields";

const UserForm = () => {
  return (
    <FormCard>
      <form>
        {fields.map((field) => (
          <Input {...field} />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </FormCard>
  );
};

export default UserForm;
