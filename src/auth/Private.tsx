import { Component } from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";
type Props = {
  isLoggin: boolean;
  component: React.ComponentType<ProfileProps>;
};

const Private: React.FC<Props> = ({ isLoggin, component: Component }) => {
  if (isLoggin) {
    return <Component name="Angkit" />;
  }
  return <Login />;
};

export default Private;
