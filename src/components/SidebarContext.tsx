'use client'

import React, { createContext, useContext, useState } from "react";

interface SidebarContextType {
  isVisible: boolean;
  setIsVisible: (value: any) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <SidebarContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </SidebarContext.Provider>
  );
};
export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if (!context) {
      throw new Error("useSidebarContext must be used within a SidebarProvider");
    }
    return context;
  };