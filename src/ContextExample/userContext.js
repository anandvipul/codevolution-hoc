import React from "react";

let UserContext = React.createContext();

let UserProvider = UserContext.Provider;
let UserConsumer = UserContext.Consumer;

export { UserConsumer, UserProvider };
