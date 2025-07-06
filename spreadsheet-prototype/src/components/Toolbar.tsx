import { FiEyeOff, FiFilter, FiGrid } from "react-icons/fi";
import { TbArrowsSort } from "react-icons/tb";


const Toolbar = () => {
  const handleClick = (action: string) => {
    console.log(`Clicked: ${action}`);
  };

  return (
    <div className="flex items-center gap-4 px-4 py-2 border-b bg-gray-50 text-sm">
      <button
        onClick={() => handleClick('Tool bar')}
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200"
      >
        {/* <FiSettings /> */}
        <span className="flex">Tool bar {'>>'}
 </span>
      </button>
      
      <button
        onClick={() => handleClick('Hide fields')}
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200"
      >
        <FiEyeOff />
        <span>Hide fields</span>
      </button>

      <button
        onClick={() => handleClick('Sort')}
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200"
      >
       <TbArrowsSort />
        <span>Sort</span>
      </button>

      <button
        onClick={() => handleClick('Filter')}
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200"
      >
        <FiFilter />
        <span>Filter</span>
      </button>

      <button
        onClick={() => handleClick('Cell view')}
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200"
      >
        <FiGrid  />
        <span>Cell view</span>
      </button>
    </div>
  );
};

export default Toolbar;
