"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

// --- Icons ---
const IconPlus = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>;
const IconTrash = () => <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>;
const IconEdit = () => <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>;
const IconX = () => <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>;
const IconSearch = () => <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>;
const IconLogout = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>;

const emptyForm = {
  title: "",
  location: "",
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
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  // Files State
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [removedGalleryUrls, setRemovedGalleryUrls] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/portfolio");
      const result = await res.json();
      setData(Array.isArray(result) ? result : []);
    } catch (error) { console.error(error); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleEdit = (item) => {
    setEditSlug(item.slug);
    setForm(item);
    setThumbnailFile(null);
    setGalleryFiles([]);
    setRemovedGalleryUrls([]); // Reset deletions
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const markForDeletion = (url) => {
    setRemovedGalleryUrls((prev) => [...prev, url]);
    setForm((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((itemUrl) => itemUrl !== url),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("location", form.location);
      formData.append("description", form.description);
      formData.append("category", form.category);
      formData.append("date", form.date);
      formData.append("slug", form.slug);

      if (thumbnailFile) formData.append("thumbnail", thumbnailFile);
      galleryFiles.forEach((file) => formData.append("galleryFiles", file));
      formData.append("removedGalleryUrls", JSON.stringify(removedGalleryUrls));

      const url = editSlug ? `/api/portfolio/${editSlug}` : "/api/portfolio/create";
      const method = editSlug ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });

      if (res.ok) {
        setForm(emptyForm);
        setEditSlug(null);
        setThumbnailFile(null);
        setGalleryFiles([]);
        setRemovedGalleryUrls([]);
        fetchData();
        alert("Project Saved Successfully!");
      }
    } catch (error) { alert("Error saving project"); }
    finally { setLoading(false); }
  };

  const handleDelete = async (slug) => {
    if (!confirm("Delete this project permanently?")) return;
    await fetch(`/api/portfolio/${slug}`, { method: "DELETE" });
    fetchData();
  };

  const filteredData = data.filter((item) =>
    item.title?.toLowerCase().includes(filter.toLowerCase()) ||
    item.location?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen py-20 bg-[#F2F1EA] text-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        
        {/* Header */}
        <div className="mb-8 flex justify-between items-end border-b border-gray-300 pb-4">
          <div>
            <h2 className="text-2xl font-black uppercase">Admin Dashboard</h2>
            <p className="text-sm text-gray-500">Manage individual gallery items and projects.</p>
          </div>
          <button onClick={() => router.push('/admin')} className="flex items-center gap-2 text-sm font-bold text-red-600 border border-red-100 px-4 py-2 rounded-lg hover:bg-red-50">
            <IconLogout /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* === LEFT: LIST === */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><IconSearch /></div>
              <input 
                type="text" placeholder="Search..." value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full pl-9 py-3 rounded-xl border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="space-y-3 overflow-y-auto max-h-[70vh] pr-2 ">
              {filteredData.map((item) => (
                <div key={item._id} className={`flex items-center gap-4 bg-white p-3 rounded-xl border transition-all cursor-pointer ${editSlug === item.slug ? "border-black shadow-md ring-1 ring-black" : "border-gray-200 hover:shadow-md"}`} onClick={() => handleEdit(item)}>
                  <img src={item.thumbnail} className="w-14 h-14 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm truncate">{item.title}</h4>
                    <p className="text-[10px] text-gray-400 uppercase font-black">{item.category} • {item.location}</p>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); handleDelete(item.slug); }} className="p-2 text-gray-300 hover:text-red-600"><IconTrash /></button>
                </div>
              ))}
            </div>
          </div>

          {/* === RIGHT: FORM === */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h2 className="text-xl font-black mb-6 border-b pb-4 flex items-center gap-2">
                {editSlug ? <><IconEdit /> EDITING MODE</> : <><IconPlus /> NEW PROJECT</>}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Title</label>
                    <input className="w-full border-2 p-3 rounded-xl text-sm focus:border-black outline-none" value={form.title} onChange={(e) => setForm({...form, title: e.target.value, slug: generateSlug(e.target.value)})} required />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Slug (Read Only)</label>
                    <input className="w-full bg-gray-50 border-2 p-3 rounded-xl text-sm text-gray-400 cursor-not-allowed" value={form.slug} readOnly />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <select className="col-span-1 border-2 p-3 rounded-xl text-sm outline-none focus:border-black bg-white" value={form.category} onChange={(e) => setForm({...form, category: e.target.value})}>
                    <option>Digital Marketing</option><option>Interior Shoots</option><option>Ad Films</option>
                  </select>
                  <input className="col-span-1 border-2 p-3 rounded-xl text-sm focus:border-black outline-none" placeholder="Location" value={form.location} onChange={(e) => setForm({...form, location: e.target.value})} required />
                  <input className="col-span-1 border-2 p-3 rounded-xl text-sm focus:border-black outline-none" type="date" value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} required />
                </div>

                {/* Thumbnail */}
                <div className="p-4 bg-gray-50 border-2 border-dashed rounded-xl">
                  <label className="text-[10px] font-black text-gray-400 uppercase mb-2 block">Thumbnail</label>
                  <div className="flex items-center gap-4">
                    <input type="file" accept="image/*" onChange={(e) => setThumbnailFile(e.target.files[0])} className="text-xs" required={!editSlug} />
                    {(thumbnailFile || form.thumbnail) && (
                      <img src={thumbnailFile ? URL.createObjectURL(thumbnailFile) : form.thumbnail} className="w-12 h-12 rounded-lg object-cover shadow-sm" />
                    )}
                  </div>
                </div>

                {/* Granular Gallery */}
                <div className="p-4 bg-gray-50 border-2 border-dashed rounded-xl">
                  <label className="text-[10px] font-black text-gray-400 uppercase mb-2 block">Gallery Management</label>
                  <input type="file" multiple accept="image/*,video/*" onChange={(e) => setGalleryFiles(Array.from(e.target.files))} className="text-xs mb-4" />
                  
                  <div className="flex flex-wrap gap-2">
                    {/* Existing Images */}
                    {form.gallery.map((url, i) => (
                      <div key={i} className="relative w-16 h-16 rounded-lg overflow-hidden group border-2 border-white shadow-sm">
                        <img src={url} className="w-full h-full object-cover" />
                        <button type="button" onClick={() => markForDeletion(url)} className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"><IconX /></button>
                      </div>
                    ))}
                    {/* New Selection Previews */}
                    {galleryFiles.map((f, i) => (
                      <div key={`new-${i}`} className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-blue-500 shadow-sm">
                        <div className="absolute top-0 right-0 bg-blue-500 text-[8px] text-white px-1 font-bold">NEW</div>
                        {f.type.startsWith("image") ? <img src={URL.createObjectURL(f)} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-black text-white flex items-center justify-center text-[7px]">VIDEO</div>}
                      </div>
                    ))}
                  </div>
                </div>

                <button type="submit" disabled={loading} className={`w-full py-4 rounded-xl text-sm font-black text-white shadow-lg transition-all uppercase tracking-widest ${editSlug ? "bg-blue-600" : "bg-black"} ${loading ? "opacity-50" : "active:scale-95"}`}>
                  {loading ? "Saving to Cloudinary..." : editSlug ? "Update Project" : "Publish Project"}
                </button>
                {editSlug && <button type="button" onClick={() => {setEditSlug(null); setForm(emptyForm); setGalleryFiles([]); setThumbnailFile([]); setRemovedGalleryUrls([]);}} className="w-full text-xs font-bold text-red-500 uppercase">Discard Edit</button>}
              </form>
            </div>
          </div>

        </div>
      </div>
      <style jsx global>{`.custom-scrollbar::-webkit-scrollbar { width: 4px; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #000; border-radius: 10px; }`}</style>
    </div>
  );
}