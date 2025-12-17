'use client';

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

// --- Icons ---
const IconPlus = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>;
const IconTrash = () => <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>;
const IconEdit = () => <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>;
const IconX = () => <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>;
const IconSearch = () => <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>;
const IconImage = () => <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>;
const IconLogout = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>;

const emptyForm = {
  title: "",
  description: "",
  slug: "",
  category: "Digital Marketing",
  thumbnail: "",
  gallery: [],
  date: "",
};

const generateSlug = (text) =>
  text.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");

export default function AdminDashboard() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editSlug, setEditSlug] = useState(null);
  const [galleryInput, setGalleryInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  // --- Auth Logic ---
  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  };

  // --- Portfolio Logic ---
  const fetchData = async () => {
    try {
      const res = await fetch("/api/portfolio");
      const result = await res.json();
      setData(Array.isArray(result) ? result : []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.title?.toLowerCase().includes(filter.toLowerCase()) ||
    item.category?.toLowerCase().includes(filter.toLowerCase())
  );

  const addGalleryUrl = () => {
    if (!galleryInput.trim()) return;
    setForm({ ...form, gallery: [...form.gallery, galleryInput.trim()] });
    setGalleryInput("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = editSlug ? `/api/portfolio/${editSlug}` : "/api/portfolio/create";
      const method = editSlug ? "PUT" : "POST";
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm(emptyForm);
        setEditSlug(null);
        fetchData();
      }
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditSlug(item.slug);
    setForm(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (slug) => {
    if (!confirm("Delete this item?")) return;
    await fetch(`/api/portfolio/${slug}`, { method: "DELETE" });
    fetchData();
  };

  const removeGallery = (index) => {
    const updated = [...form.gallery];
    updated.splice(index, 1);
    setForm({ ...form, gallery: updated });
  };

  return (
    <div className="min-h-screen py-20 bg-[#F2F1EA] font-sans text-gray-800">
     

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        {/* Page Header */}
        <div className="mb-8 flex justify-between items-end border-b border-gray-300 pb-4">
             <div>
                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Project Manager</h2>
                <p className="text-sm text-gray-500">Securely manage your projects and gallery.</p>
             </div>
             <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm font-semibold text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors border border-red-100"
        >
          <IconLogout /> Logout
        </button>
        </div>

        {/* --- MAIN GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            
            {/* === LEFT: LIST === */}
            <div className="lg:col-span-2 lg:sticky lg:top-24 h-auto lg:h-[calc(100vh-10rem)] flex flex-col order-2 lg:order-1">
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><IconSearch /></div>
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full pl-9 pr-8 py-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-black outline-none bg-white shadow-sm"
                    />
                </div>

                <div className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar">
                    {filteredData.length === 0 ? (
                        <div className="text-gray-400 text-center py-20 bg-white/50 border-2 border-dashed rounded-xl text-sm">No projects found.</div>
                    ) : (
                        filteredData.map((item) => (
                            <div
                                key={item._id}
                                className={`group flex items-center gap-4 bg-white p-3 rounded-xl border transition-all cursor-pointer ${
                                    editSlug === item.slug ? "border-black ring-1 ring-black shadow-md" : "border-gray-200 hover:shadow-md"
                                }`}
                                onClick={() => handleEdit(item)}
                            >
                                <div className="w-16 h-16 rounded-lg bg-gray-100 shrink-0 overflow-hidden border">
                                    {item.thumbnail ? <img src={item.thumbnail} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full"><IconImage /></div>}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-gray-900 text-sm truncate">{item.title}</h4>
                                    <span className="text-[10px] uppercase font-black text-gray-400">{item.category}</span>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleDelete(item.slug); }}
                                    className="p-2 text-black hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    <IconX />
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* === RIGHT: FORM === */}
            <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                        <h2 className="text-xl font-black flex items-center gap-2">
                            {editSlug ? <><IconEdit /> EDIT PROJECT</> : <><IconPlus /> NEW PROJECT</>}
                        </h2>
                        {editSlug && (
                            <button onClick={() => {setEditSlug(null); setForm(emptyForm);}} className="text-xs font-bold text-red-500 uppercase tracking-widest hover:underline">
                                Cancel Edit
                            </button>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 md:col-span-1">
                                <label className="block text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest">Project Title</label>
                                <input
                                    placeholder="Enter title"
                                    value={form.title}
                                    onChange={(e) => setForm({ ...form, title: e.target.value, slug: generateSlug(e.target.value) })}
                                    className="w-full border-gray-200 border-2 p-3 rounded-xl text-sm focus:border-black outline-none transition-all"
                                    required
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label className="block text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest">Unique Slug</label>
                                <input value={form.slug} readOnly className="w-full bg-gray-50 border-2 border-gray-100 p-3 rounded-xl text-sm text-gray-400 font-mono cursor-not-allowed" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest">Description</label>
                            <textarea
                                rows={3}
                                placeholder="Describe the project..."
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                                className="w-full border-gray-200 border-2 p-3 rounded-xl text-sm focus:border-black outline-none"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest">Category</label>
                                <select
                                    value={form.category}
                                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                                    className="w-full border-gray-200 border-2 p-3 rounded-xl text-sm bg-white focus:border-black outline-none"
                                >
                                    <option>Digital Marketing</option>
                                    <option>Interior Shoots</option>
                                    <option>Ad Films</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest">Date</label>
                                <input
                                    type="date"
                                    value={form.date}
                                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                                    className="w-full border-gray-200 border-2 p-3 rounded-xl text-sm focus:border-black outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest">Thumbnail Image URL</label>
                            <div className="flex gap-3 mt-1">
                                <input
                                    placeholder="https://..."
                                    value={form.thumbnail}
                                    onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
                                    className="flex-1 border-gray-200 border-2 p-3 rounded-xl text-sm focus:border-black outline-none"
                                    required
                                />
                                {form.thumbnail && <img src={form.thumbnail} className="w-12 h-12 object-cover rounded-xl border-2 border-white shadow-md" />}
                            </div>
                        </div>

                        {/* Gallery Section */}
                        <div className="bg-gray-50 p-4 rounded-2xl border-2 border-gray-100">
                             <label className="block text-[10px] font-black text-gray-400 mb-3 uppercase tracking-widest">Gallery Images</label>
                            <div className="flex gap-2 mb-4">
                                <input
                                    placeholder="Paste image URL..."
                                    value={galleryInput}
                                    onChange={(e) => setGalleryInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addGalleryUrl())}
                                    className="flex-1 border-gray-200 border-2 p-2.5 rounded-xl text-sm outline-none focus:border-black"
                                />
                                <button type="button" onClick={addGalleryUrl} className="bg-black text-white px-4 py-2 rounded-xl text-xs font-bold hover:scale-105 transition-transform">Add</button>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {form.gallery.map((img, i) => (
                                    <div key={i} className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-white shadow-sm group">
                                        <img src={img} className="w-full h-full object-cover" />
                                        <button type="button" onClick={() => removeGallery(i)} className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"><IconX /></button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 rounded-xl text-sm font-black text-white shadow-lg transition-all active:scale-95 uppercase tracking-widest ${
                                editSlug ? "bg-blue-600 hover:bg-blue-700" : "bg-black hover:bg-gray-900"
                            } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {loading ? "Processing..." : editSlug ? "Update Project" : "Create Project"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #000; border-radius: 10px; }
      `}</style>
    </div>
  );
}