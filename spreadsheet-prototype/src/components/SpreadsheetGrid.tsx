import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import type { CellContext } from "@tanstack/react-table";

type RowData = {
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: string;
};

const initialData: RowData[] = [
  {
    jobRequest: "Launch social media campaign for product",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "6,200,000 ₹",
  },
  {
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhan.com",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: "3,500,000 ₹",
  },
  {
    jobRequest: "Finalize user testing feedback for app",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnson.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: "4,750,000 ₹",
  },
  {
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen.com",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: "5,900,000 ₹",
  },
  {
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrown.com",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: "2,800,000 ₹",
  },
];

const TOTAL_ROWS = 20;

const columnHelper = createColumnHelper<RowData>();

const SpreadsheetGrid = () => {
  const [data, setData] = useState<RowData[]>(initialData);

  const handleCellChange = (
    rowIndex: number,
    columnId: keyof RowData,
    value: string
  ) => {
    const updated = [...data];
    updated[rowIndex][columnId] = value;
    setData(updated);
  };

  const StatusPill = (status: string) => {
    let color = "";
    if (status === "In-process") color = "bg-yellow-100 text-yellow-800";
    else if (status === "Need to start") color = "bg-blue-100 text-blue-800";
    else if (status === "Complete") color = "bg-green-100 text-green-800";
    else if (status === "Blocked") color = "bg-red-100 text-red-800";
    else color = "bg-gray-100 text-gray-800";
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>
        {status}
      </span>
    );
  };

  const PriorityPill = (priority: string) => {
    let color = "";
    if (priority === "High") color = "text-red-600";
    else if (priority === "Medium") color = "text-yellow-600";
    else color = "text-blue-600";
    return (
      <span className={`text-sm font-medium ${color}`}>
        {priority}
      </span>
    );
  };

  const columns = [
    columnHelper.display({
      id: "rowNumber",
      header: "#",
      cell: (info) => info.row.index + 1,
    }),
    columnHelper.accessor("jobRequest", {
      header: "Job Request",
      cell: (info: CellContext<RowData, string>) => (
        <input
          className="border-none outline-none w-full px-1 bg-transparent"
          value={info.getValue()}
          onChange={(e) =>
            handleCellChange(info.row.index, "jobRequest", e.target.value)
          }
        />
      ),
    }),
    columnHelper.accessor("submitted", { header: "Submitted" }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => StatusPill(info.getValue()),
    }),
    columnHelper.accessor("submitter", { header: "Submitter" }),
    columnHelper.accessor("url", { header: "URL" }),
    columnHelper.accessor("assigned", { header: "Assigned" }),
    columnHelper.accessor("priority", {
      header: "Priority",
      cell: (info) => PriorityPill(info.getValue()),
    }),
    columnHelper.accessor("dueDate", { header: "Due Date" }),
    columnHelper.accessor("estValue", { header: "Est. Value" }),
    // The empty column
    columnHelper.display({
      id: "addColumn",
      header: () => <span className="text-gray-400">&nbsp;</span>,  // Blank header
      cell: () => "",
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const blankRowsCount = TOTAL_ROWS - data.length;
  const columnCount = columns.length;

  return (
    <div className="overflow-auto border-t">
      <table className="min-w-full border border-gray-300 border-collapse text-sm bg-white">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-50">
              {headerGroup.headers.map((header, index) => (
                <th
                  key={header.id}
                  className={`text-left px-3 py-2 font-medium text-gray-700 ${
                    index === columnCount - 1
                      ? 'min-w-[80px] border-t border-b border-l border-gray-300 border-r-[1px_dashed_#d1d5db]'
                      : 'border border-gray-300'
                  }`}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell, index) => (
                <td
                  key={cell.id}
                  className={`px-3 py-2 align-top ${
                    cell.column.id === 'addColumn'
                      ? 'min-w-[80px] border-t border-b border-l border-gray-300 border-r-[1px_dashed_#d1d5db]'
                      : 'border border-gray-300'
                  }`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}

          {Array.from({ length: blankRowsCount }, (_, index) => (
            <tr key={`blank-${index}`} className="hover:bg-gray-50">
              {columns.map((_, colIndex) => (
                <td
                  key={`blank-${index}-${colIndex}`}
                  className={`px-3 py-2 align-top ${
                    colIndex === columnCount - 1
                      ? 'min-w-[80px] border-t border-b border-l border-gray-300 border-r-[1px_dashed_#d1d5db]'
                      : 'border border-gray-300'
                  }`}
                >
                  {colIndex === 0 ? data.length + index + 1 : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpreadsheetGrid;
