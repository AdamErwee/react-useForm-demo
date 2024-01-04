import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/user/users.jsx";
import UserForm from "./pages/user/user-form.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" component={Users} />
        <Route path="/user/new" component={UserForm} />
        <Route path="/user/edit/:userId" component={UserForm} />
      </Routes>
    </div>
  );
};

export default App;
