import React, { useEffect } from "react";
import { Grid, Button, Flex, Text } from "../../atoms";
import { Link, useHistory } from "react-router-dom";
import { ViewSection } from "../../organisms";

export const Homepage = () => {
  const history = useHistory();
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, [history, user]);

  return (
    <Grid
      justifyItems="center"
      fontSize={{ xs: "0.5rem" }}
      maxWidth={{ md: "966px", ml: "1190px" }}
      mx="auto"
      p="3rem"
    >
      <Flex justifyContent="space-between" width="100%" alignItems="center">
        <Flex>
          <Text fontSize={{ xs: "14px", md: "18px" }} color="#757575">
            UserName:
          </Text>
          <Text fontSize={{ xs: "14px", md: "18px" }} ml=".5rem">
            {user}
          </Text>
        </Flex>
        <Link to="/logout">
          <Button>Logout</Button>
        </Link>
      </Flex>
      <Grid
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        py="3rem"
        gridGap={{ xs: "2rem", md: "8rem" }}
        width="100%"
      >
        <ViewSection />
        <ViewSection />
      </Grid>
    </Grid>
  );
};
