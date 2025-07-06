

const HeaderBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b">
      <div className="text-sm text-gray-500">
        Workspace &gt; Folder 2 &gt; <span className="font-medium text-black">Spreadsheet 3</span>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search within sheet"
          className="border px-2 py-1 rounded text-sm"
        />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
          <span className="text-sm">John Doe</span>
        </div>
        <button className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700">
          + New Action
        </button>
      </div>
    </div>
  );
};

export default HeaderBar;
