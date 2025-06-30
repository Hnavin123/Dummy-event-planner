
import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from JSONPlaceholder
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-xl mt-10">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">User List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold text-blue-700">{user.name}</h3>
            <p className="text-gray-700">📧 {user.email}</p>
            <p className="text-gray-600">🏢 {user.company.name}</p>
            <p className="text-sm text-gray-400 mt-2">🌍 {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
