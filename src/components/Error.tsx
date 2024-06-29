'use client';
import { FC } from 'react';
import React from 'react';

export const Error: FC<{
  statusCode?: number;
}> = ({ statusCode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center sm:py-40">
      <div className="relative">
        <div className="absolute inset-0 text-error-300">
          <p>
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : 'An error occurred on client'}
          </p>
        </div>
      </div>
    </div>
  );
};
  