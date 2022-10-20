import React from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  children: React.ReactNode;
}

export function Portal({ children }: IPortalProps) {
  return createPortal(<>{children}</>, document.getElementById("portal-root")!);
}
