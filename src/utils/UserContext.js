import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy",
    email: "dummy@gmail.com",
  },
});

UserContext.displayName = "AshishContext";

export default UserContext;
