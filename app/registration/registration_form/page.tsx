"use client"
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

import { envInfo } from "@/lib/env";
const supabase = createClient(envInfo.supabaseUrl, envInfo.supabaseAnonKey);

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    paper_id: "",
    paper_title: "",
    author_name: "",
    country: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    const { error } = await supabase.from("registrations").insert([form]);
    setLoading(false);
    if (error) setError(error.message);
    else setSuccess(true);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="mobile" placeholder="Mobile No" value={form.mobile} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="paper_id" placeholder="Paper ID" value={form.paper_id} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="paper_title" placeholder="Paper Title" value={form.paper_title} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="author_name" placeholder="Author Name" value={form.author_name} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="country" placeholder="Country Name" value={form.country} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="city" placeholder="City Name" value={form.city} onChange={handleChange} required className="w-full border p-2 rounded" />
        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">
          {loading ? "Registering..." : "Submit Registration"}
        </button>
        {success && <div className="text-green-700 font-semibold">Registration successful!</div>}
        {error && <div className="text-red-700 font-semibold">{error}</div>}
      </form>
    </div>
  );
}

