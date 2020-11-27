import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export default function Homepage() {
  return (
    <div className="text-center">
      <h1>Homepage</h1>
      <ButtonGroup>
        <Button variant="theme-background">theme-background</Button>
        <Button variant="theme-accent-dark">theme-accent-dark</Button>
        <Button variant="theme-accent-mid">theme-accent-mid</Button>
        <Button variant="theme-accent-light">theme-accent-light</Button>
        <Button variant="theme-foreground">theme-foreground</Button>
      </ButtonGroup>
    </div>
  );
}
