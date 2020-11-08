import React, { useEffect } from "react";

import { Loader } from "../../../atoms";
import { useHistory } from "react-router";

export const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem("user");
    history.push("/login");
  }, [history]);

  return <Loader />;
};
