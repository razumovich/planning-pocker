import React from "react";
import { render, screen } from "@testing-library/react";
import { Layout } from "./Layout";

test("Layout renders correctly", () => {
  render(
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>Header</Layout.Content>
    </Layout>
  );

  const header = screen.getByTestId("layout-header");
  const content = screen.getByTestId("layout-content");

  expect(header).toBeTruthy();
  expect(content).toBeTruthy();
});
