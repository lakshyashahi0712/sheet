import { FiLink, FiRefreshCw, FiPlus, FiSliders } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function SheetHeader() {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b border-gray-300 overflow-x-auto grid grid-cols-6">
      
      {/* Q3 Financial Overview */}
      <div className="flex items-center gap-1 bg-white rounded-full px-3 py-1 border border-gray-300 text-sm text-gray-800 grid-cols-3">
        <FiLink className="text-blue-500" />
        Q3 Financial Overview
      </div>
      <button className="text-orange-500 hover:text-orange-600 p-1">
        <FiRefreshCw />
      </button>

      {/* ABC */}
      <div className="flex items-center gap-1 bg-green-50 rounded px-3 py-1 border border-green-100 text-sm text-green-800">
        <FiSliders className="text-green-400" />
        ABC
        <HiOutlineDotsHorizontal className="ml-1 text-green-400" />
      </div>

      {/* Answer a question */}
      <div className="flex items-center gap-1 bg-purple-50 rounded px-3 py-1 border border-purple-100 text-sm text-purple-800">
        <FiSliders className="text-purple-400" />
        Answer a question
        <HiOutlineDotsHorizontal className="ml-1 text-purple-400" />
      </div>

      {/* Extract */}
      <div className="flex items-center gap-1 bg-orange-50 rounded px-3 py-1 border border-orange-100 text-sm text-orange-800">
        <FiSliders className="text-orange-400" />
        Extract
        <HiOutlineDotsHorizontal className="ml-1 text-orange-400" />
      </div>

      {/* Plus at end */}
      <button className="ml-auto bg-gray-200 hover:bg-gray-300 rounded px-3 py-1">
        <FiPlus />
      </button>
    </div>
  );
}
