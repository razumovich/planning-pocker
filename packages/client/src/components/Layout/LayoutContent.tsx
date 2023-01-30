import React, { FC } from "react";
import { LayoutProps } from "./types";

export const LayoutContent: FC<LayoutProps> = ({ children }) => {
  return <main data-testid="layout-content">{children}</main>;
};
