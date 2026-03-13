"use client";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // NEW: State for editing
  const [editId, setEditId] = useState(null);

  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(Array.isArray(data) ? data : []);
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    if (file) formData.append("media", file);

    const url = editId ? `/api/users/${editId}` : "/api/users";
    const method = editId ? "PUT" : "POST";

    const res = await fetch(url, { method, body: formData });

    if (res.ok) {
      setName("");
      setFile(null);
      setEditId(null);
      fetchUsers();
    }
    setLoading(false);
  };

  const handleEdit = (user) => {
    setEditId(user._id);
    setName(user.name);
    // Note: We can't pre-fill the file input for security reasons
    window.scrollTo(0, 0); // Scroll to form
  };

  const deleteUser = async (id) => {
    if (!confirm("Are you sure?")) return;
    await fetch(`/api/users/${id}`, { method: "DELETE" });
    fetchUsers();
  };

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold mb-4">
        {editId ? "Edit Project" : "Create Project"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded bg-gray-50">
        <input 
          className="border p-2 block w-full" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])} 
        />
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white p-2 rounded" type="submit" disabled={loading}>
            {loading ? "Processing..." : editId ? "Update" : "Create"}
          </button>
          {editId && (
            <button 
              className="bg-gray-400 text-white p-2 rounded" 
              onClick={() => { setEditId(null); setName(""); }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {users.map((user) => (
          <div key={user._id} className="border p-4 relative group">
            <h4 className="font-bold">{user.name}</h4>
            {user.media?.url && (
              user.media.resource_type === "image" ? 
              <img src={user.media.url} className="w-full h-40 object-cover" /> : 
              <video src={user.media.url} className="w-full h-40" controls />
            )}
            
            <div className="mt-2 flex gap-2">
              <button 
                onClick={() => handleEdit(user)}
                className="bg-yellow-500 text-white text-xs px-2 py-1 rounded"
              >
                Edit
              </button>
              <button 
                onClick={() => deleteUser(user._id)}
                className="bg-red-500 text-white text-xs px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}