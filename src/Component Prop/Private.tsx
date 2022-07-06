import { Component } from "react";
import { Login } from "./Login";
import {ProfileProp} from "./profile"


type privateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProp>;
};

export const Private = ({ isLoggedIn, component:Component }:privateProps) => {
  return isLoggedIn ? <Component name="srinibas" /> : <Login />;
};
