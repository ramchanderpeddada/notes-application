import { LightbulbOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Light = styled(LightbulbOutlined)`
  font-size: 120px;
  color: #ffda95;
`;
const Text = styled(Typography)`
  color: #80868b;
  font-size: 22px;
  margin-top: 10px;
`;
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25vh;
`;
const EmptyNotes = ({ name }) => {
  return (
    <>
      <Container>
        <Light />
        <Text>No {name} Found!</Text>
      </Container>
    </>
  );
};

export default EmptyNotes;
