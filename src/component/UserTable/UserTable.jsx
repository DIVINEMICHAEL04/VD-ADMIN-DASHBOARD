import React from "react";
import mockUsers from "../../data/mockUsers";

export default function UserTable() {
  return (
    <div className="user-table">
      <h3 className="mb-4 text-lg font-bold">Recent Users</h3>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Joined</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
              <td
                className={`border p-2 ${
                  user.status === "Active" ? "text-green-600" : "text-red-600"
                }`}
              >
                {user.status}
              </td>
              <td className="border p-2">{user.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
