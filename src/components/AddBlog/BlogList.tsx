import React from "react";
import { Tooltip } from "@nextui-org/react";

const data = [
  { id: 1, name: "Item One", description: "This is item one Blog." },
  { id: 2, name: "Item Two", description: "This is item two Blog." },
  // Add more items as needed
];

const BlogList = ({handleBlogForm}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg border border-gray-200 bg-white">
        <thead>
          <tr>
            <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              ID
            </th>
            <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Name
            </th>
            <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Description
            </th>
            <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                {item.id}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                {item.name}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                {item.description}
              </td>
              <td className="flex space-x-4 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
                <button onClick={handleBlogForm} className="text-blue-600 hover:text-blue-800">
                  <Tooltip
                    showArrow={true}
                    content="Edit"
                    placement="top"
                    color="foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.232 5.232a3 3 0 014.536 4.536L9 20.5H4.5V16L15.232 5.232z"
                      />
                    </svg>
                  </Tooltip>
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Tooltip
                    showArrow={true}
                    content="Delete"
                    placement="top"
                    color="foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m7 0H5"
                      />
                    </svg>
                  </Tooltip>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
