"use client";

import React, { useState, useEffect, ReactNode } from 'react';


// This component solely exists to prevent the map initialization error
const LeafletMapWrapper = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-[500px] bg-gray-200 flex items-center justify-center">
        <div className="text-gray-500 text-xl">Loading Map...</div>
      </div>
    );
  }

  return <div id="map-container">{children}</div>;
};

export default LeafletMapWrapper;