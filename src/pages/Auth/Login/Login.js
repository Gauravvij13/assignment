import React, { useCallback, useEffect } from "react";
import LoginForm from "../../../organisms/LoginForm";
import { Box, Flex } from "../../../atoms";
import { useHistory } from "react-router";

export const Login = () => {
  const history = useHistory();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (user) {
      history.push("/home");
    }
  }, [history, user]);

  const onSubmit = useCallback(
    async (values) => {
      if (values.username && values.password) {
        localStorage.setItem("user", values.username);
        history.push("/home");
      }
    },
    [history]
  );

  return (
    <Flex
      p={{ xs: "4rem 1.5rem", md: "5rem 7rem", ml: "5rem 13rem" }}
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
      <Box
        width={{ xs: "100%", md: "30%" }}
        border="2px solid #eee"
        p="40px"
        borderRadius="15px"
        boxShadow="2px 2px 20px #7c7b79"
      >
        <LoginForm onSubmit={onSubmit} />
      </Box>
    </Flex>
  );
};
