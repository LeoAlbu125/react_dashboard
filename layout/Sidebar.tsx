// components/Header.tsx
import React from "react";

interface HeaderProps {
  title: string;
}

const Sidebar: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex mb-6">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
    </header>
  );
};

export default Sidebar;