import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("All Orders");

  const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    console.log(`Switched to tab: ${tab}`);
  };

  const handleAddTab = () => {
    console.log("Clicked Add New Tab (+)");
  };

  return (
    <div className="flex items-center border-t px-4 py-2 bg-white text-sm">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`px-3 py-1 rounded hover:bg-gray-100 ${
            tab === activeTab ? "border-b-2 border-blue-600 font-medium text-blue-700" : "text-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
      <button
        onClick={handleAddTab}
        className="ml-auto p-1 text-gray-500 hover:text-black"
        title="Add Tab"
      >
        <FiPlus  />
      </button>
    </div>
  );
};

export default BottomTabs;
