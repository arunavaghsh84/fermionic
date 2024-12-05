import React, { useEffect, useState } from "react";
import { Tooltip } from "@nextui-org/react";
import { User } from "@/types/user";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const UserList = ({ handleUserForm }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("/api/users");

    if (res.ok) {
      const data = await res.json();
      setUsers(data);
    } else {
      console.error("Error fetching users");
    }
  };

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch(`/api/users/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          toast.success("User deleted successfully!");
          fetchUsers();
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-sm border border-gray-200 bg-white">
        <thead>
          <tr>
            <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Sl No.
            </th>
            <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Name
            </th>
            <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Email
            </th>
            <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ _id, name, email }, index) => (
            <tr key={_id} className="hover:bg-gray-100">
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                {index + 1}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                {name}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                {email}
              </td>
              <td className="flex space-x-4 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
                <button
                  onClick={() => handleUserForm(users[index])}
                  className="text-blue-600 hover:text-blue-800"
                >
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
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.232 5.232a3 3 0 014.536 4.536L9 20.5H4.5V16L15.232 5.232z"
                      />
                    </svg>
                  </Tooltip>
                </button>
                <button
                  onClick={() => handleDelete(_id)}
                  className="text-red-600 hover:text-red-800"
                >
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
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
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

export default UserList;
