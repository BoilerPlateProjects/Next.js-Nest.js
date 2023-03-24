import { FC, PropsWithChildren } from "react";

import "@/styles/globals.css";

export const metadata = {
  title: "Next.JS & Nest.JS Boilerplate by MDReal",
  description: "Generated by Vercel & Modified by MDReal"
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
