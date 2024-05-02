"use client";
import React, { FC, useEffect } from 'react';

const Error: FC<{
  statusCode: number;
  error: Error & { digest?: string };
  reset: () => void;
}> = ({ statusCode, error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
