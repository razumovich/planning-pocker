import React, { FC } from "react";
import { LayoutProps } from "./types";

export const LayoutHeader: FC<LayoutProps> = ({ children }) => {
  return <header data-testid="layout-header">{children}</header>;
};
