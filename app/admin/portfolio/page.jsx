"use client";

import { useEffect, useState } from "react";

const emptyForm = {
  title: "",
  slug: "",
  category: "Digital Marketing",
  thumbnail: "",
  gallery: "",
  date: "",
};

export default function AdminPortfolio() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    const res = await fetch("/api/portfolio");
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      gallery: form.gallery.split(",").map((i) => i.trim()),
    };

    if (editId) {
      await fetch(`/api/portfolio/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch("/api/portfolio/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    setForm(emptyForm);
    setEditId(null);
    fetchData();
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setForm({
      ...item,
      gallery: item.gallery.join(", "),
    });
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this item?")) return;
    await fetch(`/api/portfolio/${id}`, { method: "DELETE" });
    fetchData();
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Portfolio</h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 border p-6 rounded-lg mb-10"
      >
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 rounded"
          required
        />

        <input
          placeholder="Slug"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
          className="border p-2 rounded"
          required
        />

        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 rounded"
        >
          <option>Digital Marketing</option>
          <option>Interior Shoots</option>
          <option>Ad Films</option>
        </select>

        <input
          placeholder="Thumbnail URL"
          value={form.thumbnail}
          onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
          className="border p-2 rounded"
          required
        />

        <input
          placeholder="Gallery URLs (comma separated)"
          value={form.gallery}
          onChange={(e) => setForm({ ...form, gallery: e.target.value })}
          className="border p-2 rounded col-span-full"
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-black text-white py-2 rounded col-span-full"
        >
          {editId ? "Update Portfolio" : "Add Portfolio"}
        </button>
      </form>

      {/* LIST */}
      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item._id}
            className="border p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-xs text-gray-500">{item.category}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => handleEdit(item)}
                className="px-4 py-1 border rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="px-4 py-1 bg-red-600 text-white rounded"
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
