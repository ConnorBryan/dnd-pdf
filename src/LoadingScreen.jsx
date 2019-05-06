import React from "react";
import { Button, Container, Segment } from "semantic-ui-react";

export default function LoadingScreen() {
  return (
    <Container
      fluid
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Segment
        placeholder
        style={{
          minWidth: "400px"
        }}
      >
        <a
          href="https://142.93.30.81:9000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button primary>Accept the Certificate</Button>
        </a>
      </Segment>
    </Container>
  );
}
