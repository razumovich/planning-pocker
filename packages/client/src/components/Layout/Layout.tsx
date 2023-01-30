import React, { Children } from "react";
import { LayoutHeader } from "./LayoutHeader";
import { LayoutContent } from "./LayoutContent";
import { LayoutProps } from "./types";

export const Layout = ({ children }: LayoutProps) => {
  const header = Children.toArray(children).find(
    (child: any) => child?.type === LayoutHeader
  );
  const content = Children.toArray(children).find(
    (child: any) => child?.type === LayoutContent
  );

  return (
    <div>
      {header}
      {content}
    </div>
  );
};

Layout.Header = LayoutHeader;
Layout.Content = LayoutContent;
