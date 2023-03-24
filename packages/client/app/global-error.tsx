"use client";

import { FC, useEffect } from "react";
import Layout from "./layout";

interface ErrorProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const GlobalError: FC<ErrorProps> = ({ error, resetErrorBoundary }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Layout>
      <h1>Something went wrong</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </Layout>
  );
};

export default GlobalError;
