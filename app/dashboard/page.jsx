"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { 
  Plus, Trash2, Edit2, Link as LinkIcon, MessageSquare, 
  X, LayoutDashboard, Briefcase, Search, LogOut, Image as ImageIcon,
  Save, Globe, ExternalLink, Film, PlayCircle
} from "lucide-react";

// --- Helpers ---
const generateSlug = (text) =>
  text?.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-") || "";

// Helper to check if a URL or File is a video
const isVideoFile = (item) => {
  if (typeof item === 'string') {
    const videoExtensions = ['.mp4', '.mov', '.webm', '.ogg'];
    return videoExtensions.some(ext => item.toLowerCase().includes(ext)) || item.includes('/video/upload/');
  }
  return item?.type?.startsWith('video/');
};

const emptyPortfolioForm = {
  title: "", location: "", description: "", slug: "",
  category: "Digital Marketing", thumbnail: "", gallery: [], date: "",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("portfolio");
  const [loading, setLoading] = useState(false);

  /* ================= 1. PORTFOLIO STATE ================= */
  const [portfolioData, setPortfolioData] = useState([]);
  const [pForm, setPForm] = useState(emptyPortfolioForm);
  const [editSlug, setEditSlug] = useState(null);
  const [pFilter, setPFilter] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]); 
  const [removedGalleryUrls, setRemovedGalleryUrls] = useState([]);

  /* ================= 2. TESTIMONIALS STATE ================= */
  const [testimonials, setTestimonials] = useState([]);
  const [tForm, setTForm] = useState({ id: null, name: "", message: "" });

  /* ================= 3. LINKS STATE ================= */
  const [links, setLinks] = useState([]);
  const [lForm, setLForm] = useState({ id: null, title: "", url: "" });

  /* ================= DATA FETCHING ================= */
  const fetchData = async () => {
    try {
      const [resP, resT, resL] = await Promise.all([
        fetch("/api/portfolio"),
        fetch("/api/testimonials"),
        fetch("/api/links")
      ]);
      setPortfolioData(await resP.json() || []);
      setTestimonials(await resT.json() || []);
      setLinks(await resL.json() || []);
    } catch (e) { console.error("Fetch Error:", e); }
  };

  useEffect(() => { fetchData(); }, []);

  /* ================= ACTIONS: PORTFOLIO ================= */
  const handleGalleryChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setGalleryFiles((prev) => [...prev, ...selectedFiles]); 
  };

  const removeNewFile = (index) => {
    setGalleryFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePortfolioSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", pForm.title || "");
      formData.append("location", pForm.location || "");
      formData.append("description", pForm.description || "");
      formData.append("category", pForm.category || "Digital Marketing");
      formData.append("date", pForm.date || "");
      formData.append("slug", pForm.slug || "");

      if (thumbnailFile) formData.append("thumbnail", thumbnailFile);
      galleryFiles.forEach((file) => formData.append("galleryFiles", file));
      formData.append("existingGallery", JSON.stringify(pForm.gallery || []));
      formData.append("removedGalleryUrls", JSON.stringify(removedGalleryUrls));

      const url = editSlug ? `/api/portfolio/${editSlug}` : "/api/portfolio/create";
      const res = await fetch(url, { method: editSlug ? "PUT" : "POST", body: formData });
      
      if (res.ok) {
        resetPortfolio();
        fetchData();
        alert("Project Saved Successfully!");
      }
    } catch (err) { alert("Error saving project"); }
    finally { setLoading(false); }
  };

  const resetPortfolio = () => {
    setPForm(emptyPortfolioForm);
    setEditSlug(null);
    setThumbnailFile(null);
    setGalleryFiles([]);
    setRemovedGalleryUrls([]);
  };

  /* ================= ACTIONS: REVIEWS ================= */
  const saveReview = async (e) => {
    e.preventDefault();
    setLoading(true);
    const method = tForm.id ? "PUT" : "POST";
    const res = await fetch("/api/testimonials", {
      method,
      body: JSON.stringify(tForm),
    });
    if (res.ok) {
      setTForm({ id: null, name: "", message: "" });
      fetchData();
    }
    setLoading(false);
  };

  /* ================= ACTIONS: REEL LINKS ================= */
  const saveLink = async (e) => {
    e.preventDefault();
    setLoading(true);
    const method = lForm.id ? "PUT" : "POST";
    const res = await fetch("/api/links", {
      method,
      body: JSON.stringify(lForm),
    });
    if (res.ok) {
      setLForm({ id: null, title: "", url: "" });
      fetchData();
    }
    setLoading(false);
  };

  const deleteItem = async (endpoint, id, isSlug = false) => {
    if(!confirm("Are you sure?")) return;
    const res = await fetch(isSlug ? `${endpoint}/${id}` : endpoint, { 
      method: "DELETE", 
      body: isSlug ? null : JSON.stringify({ id }) 
    });
    if(res.ok) fetchData();
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col md:flex-row pt-16 md:pt-24">
      
      {/* SIDEBAR (Desktop) */}
      <aside className="hidden md:flex w-64 bg-white border-r border-t fixed h-full flex-col z-20">
        <div className="p-6 border-b flex items-center gap-2">
          <div className="bg-black text-white p-1.5 rounded-lg"><LayoutDashboard size={20}/></div>
          <span className="font-black text-xl tracking-tighter">Dashboard</span>
        </div>
        <nav className="p-4 space-y-1 flex-1">
          {[
            { id: "portfolio", label: "Projects", icon: <Briefcase size={18}/> },
            { id: "testimonials", label: "Reviews", icon: <MessageSquare size={18}/> },
            { id: "links", label: "Reel Links", icon: <Film size={18}/> },
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id ? "bg-black text-white" : "text-gray-500 hover:bg-gray-50"}`}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t">
          <button onClick={() => router.push('/admin')} className="w-full flex items-center justify-center gap-2 py-3 text-red-500 font-bold text-sm hover:bg-red-50 rounded-xl transition">
            <LogOut size={16}/> Logout
          </button>
        </div>
      </aside>

      {/* BOTTOM NAV (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-2 z-30 shadow-lg">
        {[
          {id: "portfolio", icon: <Briefcase/>}, 
          {id: "testimonials", icon: <MessageSquare/>}, 
          {id: "links", icon: <Film/>}
        ].map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)} className={`p-3 ${activeTab === t.id ? "text-black" : "text-gray-400"}`}>{t.icon}</button>
        ))}
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 md:ml-64 p-4 md:p-10 mb-20 md:mb-0 max-w-7xl">
        
        {/* --- PORTFOLIO TAB --- */}
        {activeTab === "portfolio" && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-in fade-in duration-300">
            <div className="lg:col-span-2 space-y-4 order-2 lg:order-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16}/>
                <input placeholder="Search projects..." className="w-full pl-11 pr-4 py-3 bg-white border rounded-2xl outline-none focus:ring-1 focus:ring-black text-sm" value={pFilter} onChange={(e) => setPFilter(e.target.value)} />
              </div>
              <div className="space-y-3 lg:max-h-[70vh] overflow-y-auto pr-1 custom-scrollbar">
                {portfolioData.filter(i => i.title?.toLowerCase().includes(pFilter.toLowerCase())).map((item) => (
                  <div key={item._id} onClick={() => { setPForm(item); setEditSlug(item.slug); setGalleryFiles([]); window.scrollTo({top:0, behavior:'smooth'}); }} 
                    className={`flex items-center gap-4 bg-white p-3 rounded-2xl border cursor-pointer transition-all ${editSlug === item.slug ? "border-black shadow-md" : "border-gray-100"}`}>
                    <img src={item.thumbnail} className="w-12 h-12 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0"><h4 className="font-bold text-sm truncate">{item.title}</h4><p className="text-[10px] text-gray-400 uppercase font-black">{item.category}</p></div>
                    <button onClick={(e) => {e.stopPropagation(); deleteItem("/api/portfolio", item.slug, true);}} className="text-gray-300 hover:text-red-500"><Trash2 size={16}/></button>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 order-1 lg:order-2">
              <form onSubmit={handlePortfolioSubmit} className="bg-white p-6 md:p-8 rounded-3xl border shadow-xl space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                  <h3 className="font-black text-gray-900 flex items-center gap-2">{editSlug ? "EDIT PROJECT" : "NEW PROJECT"}</h3>
                  {editSlug && <button type="button" onClick={resetPortfolio} className="text-xs text-red-500 font-bold">CANCEL</button>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input className="w-full border-2 p-3 rounded-xl text-sm outline-none focus:border-black" placeholder="Title" value={pForm.title} onChange={(e) => setPForm({...pForm, title: e.target.value, slug: generateSlug(e.target.value)})} required />
                  <input className="w-full bg-gray-50 border-2 p-3 rounded-xl text-sm text-gray-400" value={pForm.slug} readOnly />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select className="border-2 p-3 rounded-xl text-sm" value={pForm.category} onChange={(e) => setPForm({...pForm, category: e.target.value})}>
                    <option>Digital Marketing</option><option>Interior Shoots</option><option>Ad Films</option>
                  </select>
                  <input className="border-2 p-3 rounded-xl text-sm" placeholder="Location" value={pForm.location} onChange={(e) => setPForm({...pForm, location: e.target.value})} required />
                  <input type="date" className="border-2 p-3 rounded-xl text-sm" value={pForm.date} onChange={(e) => setPForm({...pForm, date: e.target.value})} required />
                </div>

                <textarea rows={3} placeholder="Description" className="w-full border-2 p-3 rounded-xl text-sm" value={pForm.description} onChange={(e) => setPForm({...pForm, description: e.target.value})} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                    <label className="text-[10px] font-black text-gray-400 block mb-2 uppercase">Thumbnail</label>
                    <input type="file" accept="image/*" onChange={(e) => setThumbnailFile(e.target.files[0])} className="text-xs w-full" />
                    {(thumbnailFile || pForm.thumbnail) && <img src={thumbnailFile ? URL.createObjectURL(thumbnailFile) : pForm.thumbnail} className="mt-2 w-full h-24 object-cover rounded-lg" />}
                  </div>

                  <div className="p-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                    <label className="text-[10px] font-black text-gray-400 block mb-2 uppercase">Gallery (Images/Videos)</label>
                    <input type="file" multiple accept="image/*,video/*" onChange={handleGalleryChange} className="text-xs w-full mb-3" />
                    <div className="flex gap-2 flex-wrap">
                      {/* Existing Gallery Preview (Handles Video) */}
                      {pForm.gallery?.map((url, i) => (
                        <div key={i} className="relative w-10 h-10 group bg-black rounded overflow-hidden">
                          {isVideoFile(url) ? (
                            <div className="w-full h-full flex items-center justify-center bg-gray-900"><PlayCircle size={14} className="text-white"/></div>
                          ) : (
                            <img src={url} className="w-full h-full object-cover shadow" />
                          )}
                          <button type="button" onClick={() => {
                             setRemovedGalleryUrls(prev => [...prev, url]);
                             setPForm(prev => ({...prev, gallery: prev.gallery.filter(u => u !== url)}));
                          }} className="absolute inset-0 bg-red-500 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"><X size={12}/></button>
                        </div>
                      ))}
                      {/* New Files Preview (Handles Video) */}
                      {galleryFiles.map((file, i) => (
                        <div key={i} className="w-10 h-10 border-2 border-blue-500 rounded relative group bg-black overflow-hidden">
                           {isVideoFile(file) ? (
                             <div className="w-full h-full flex items-center justify-center bg-gray-900"><PlayCircle size={14} className="text-blue-400"/></div>
                           ) : (
                             <img src={URL.createObjectURL(file)} className="w-full h-full object-cover" />
                           )}
                           <button type="button" onClick={() => removeNewFile(i)} className="absolute -top-1 -right-1 bg-black text-white rounded-full p-0.5"><X size={8}/></button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button type="submit" disabled={loading} className="w-full py-4 bg-black text-white rounded-2xl font-black text-sm uppercase transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-200">
                  {loading ? "Processing..." : <><Save size={18}/> {editSlug ? "Update" : "Publish"}</>}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* --- REVIEWS TAB --- */}
        {activeTab === "testimonials" && (
          <div className="max-w-4xl space-y-8 animate-in fade-in duration-300">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border space-y-4">
              <h3 className="font-black text-gray-900 uppercase">Manage Reviews</h3>
              <form onSubmit={saveReview} className="space-y-4">
                <input className="w-full border-2 p-4 rounded-2xl outline-none" placeholder="Client Name" value={tForm.name} onChange={(e) => setTForm({...tForm, name: e.target.value})} required />
                <textarea className="w-full border-2 p-4 rounded-2xl outline-none" rows={3} placeholder="Review Text" value={tForm.message} onChange={(e) => setTForm({...tForm, message: e.target.value})} required />
                <button type="submit" className="bg-black text-white px-8 py-3 rounded-xl font-bold text-sm uppercase shadow-lg">
                    {tForm.id ? "Update Review" : "Save Review"}
                </button>
                {tForm.id && <button onClick={() => setTForm({id:null, name:"", message:""})} className="ml-4 text-red-500 text-sm font-bold">Cancel</button>}
              </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map((t) => (
                <div key={t._id} className="group bg-white p-5 rounded-2xl border shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <h4 className="font-black text-gray-900">{t.name}</h4>
                    <div className="flex gap-2">
                      <button onClick={() => {setTForm({id:t._id, name:t.name, message:t.message}); window.scrollTo({top:0})}} className="text-blue-500"><Edit2 size={16}/></button>
                      <button onClick={() => deleteItem("/api/testimonials", t._id)} className="text-red-500"><Trash2 size={16}/></button>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-2 italic">"{t.message}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- REEL LINKS TAB --- */}
        {activeTab === "links" && (
          <div className="max-w-3xl space-y-6 animate-in fade-in duration-300">
             <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border">
                <h3 className="font-black text-gray-900 mb-4 uppercase">Reel Link Manager</h3>
                <form onSubmit={saveLink} className="flex flex-col gap-3">
                    <input className="border-2 p-4 rounded-2xl outline-none" placeholder="URL (Instagram/YouTube Link)" value={lForm.url} onChange={(e) => setLForm({...lForm, url: e.target.value})} required />
                    <button type="submit" className="bg-black text-white py-4 rounded-2xl font-black text-xs uppercase shadow-lg">
                        {lForm.id ? "Update Link" : "Add Link"}
                    </button>
                    {lForm.id && <button onClick={() => setLForm({id:null, title:"", url:""})} className="text-red-500 text-xs font-bold">Cancel Edit</button>}
                </form>
             </div>
             <div className="bg-white rounded-3xl border overflow-hidden shadow-sm divide-y">
                {links.map((link) => (
                    <div key={link._id} className="p-4 flex justify-between items-center hover:bg-gray-50 transition group">
                        <div className="flex items-center gap-4">
                            <div className="bg-purple-100 text-purple-600 p-3 rounded-xl"><Film size={18}/></div>
                            <div><p className="font-bold text-gray-900">{link.title || "Social Link"}</p><p className="text-xs text-blue-500">{link.url}</p></div>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => {setLForm({id:link._id, title:link.title, url:link.url}); window.scrollTo({top:0})}} className="text-gray-400 hover:text-blue-500"><Edit2 size={18}/></button>
                            <button onClick={() => deleteItem("/api/links", link._id)} className="text-gray-400 hover:text-red-500"><Trash2 size={18}/></button>
                        </div>
                    </div>
                ))}
             </div>
          </div>
        )}

      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #000; }
      `}</style>
    </div>
  );
}