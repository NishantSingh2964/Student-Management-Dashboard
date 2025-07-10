import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialForm = { name: '', regNo: '', dept: '', year: '', marks: '' };

export default function AdminPanel({ students, setStudents }) {
  const [form, setForm] = useState(initialForm);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...students];
      updated[editIndex] = form;
      setStudents(updated);
      setEditIndex(null);
    } else {
      setStudents([...students, form]);
    }
    setForm(initialForm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-blue-100 p-10">
      <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-10 drop-shadow">
        🎓 Admin Panel
      </h1>

      <div className="text-center mb-10">
        <Link
          to="/students"
          className="inline-block bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-900 px-6 py-3 rounded-xl text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
        >
          📖 View Student Information
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-2xl shadow-2xl max-w-6xl mx-auto border border-blue-200"
      >
        {Object.keys(initialForm).map((key) => (
          <input
            key={key}
            name={key}
            value={form[key]}
            onChange={handleChange}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
            required
          />
        ))}
        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg tracking-wide"
        >
          {editIndex !== null ? 'Update Student' : 'Add Student'}
        </button>
      </form>
    </div>
  );
}
