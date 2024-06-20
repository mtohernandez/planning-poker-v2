import React from 'react';

/*
 * This file is responsible for adding all the top level boundaries
 */

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <React.Suspense fallback={<div>Loading...</div>}>{children}</React.Suspense>;
};
