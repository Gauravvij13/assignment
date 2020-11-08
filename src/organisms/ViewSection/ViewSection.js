import React, { useState } from "react";
import { Box, Flex } from "../../atoms";
import { UrlInput } from "../../molecules/UrlInput/UrlInput";

export const ViewSection = () => {
  const [url, setUrl] = useState("");
  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <Flex flexDirection="column" p="1rem">
      <UrlInput handleChange={handleChange} label="Please Enter Url" />
      <Box
        height={{ xs: "20vh", md: "60vh" }}
        border="2px solid #eee"
        p="5px"
        mt="1rem"
        borderRadius="15px"
        boxShadow="1px 1px 10px #7c7b79"
      >
        <iframe
          width="100%"
          height="100%"
          src={url}
          title="webFrame"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Flex>
  );
};
