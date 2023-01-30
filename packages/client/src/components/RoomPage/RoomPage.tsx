import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../Layout";

export const RoomPage = () => {
  const { roomId } = useParams();

  console.log(roomId);

  return (
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>Content</Layout.Content>
    </Layout>
  );
};
