// App.tsx
import React from "react";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-4 overflow-y-auto">
        <Header title="temporary"/>
        <a>test</a>
      </div>
    </div>
  );
}

export default App;
