import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function StudentInfo({ students, onEdit, onDelete }) {
  const [search, setSearch] = useState('');
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.regNo.toLowerCase().includes(search.toLowerCase()) ||
    s.dept.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white p-8 relative">
      <h1 className="text-5xl font-extrabold text-center text-green-700 mb-12 drop-shadow">
        📋 Student Information
      </h1>

      <div className="max-w-4xl mx-auto mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search by name, reg no or dept..."
          className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 placeholder:text-gray-500"
        />
      </div>

      <div className="overflow-x-auto max-w-6xl mx-auto bg-white rounded-xl shadow-lg border border-green-200">
        <table className="w-full text-sm text-left text-gray-800">
          <thead className="text-sm uppercase bg-green-200 text-green-900">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Reg No</th>
              <th className="px-4 py-3">Dept</th>
              <th className="px-4 py-3">Year</th>
              <th className="px-4 py-3">Marks</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  No students found.
                </td>
              </tr>
            ) : (
              filtered.map((s, i) => (
                <tr key={i} className="border-t hover:bg-green-50 transition duration-200">
                  <td className="px-4 py-3">{s.name}</td>
                  <td className="px-4 py-3">{s.regNo}</td>
                  <td className="px-4 py-3">{s.dept}</td>
                  <td className="px-4 py-3">{s.year}</td>
                  <td className="px-4 py-3">{s.marks}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => onEdit?.(i)}
                      className="text-blue-600 hover:underline font-medium mr-3"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => onDelete?.(i)}
                      className="text-red-600 hover:underline font-medium"
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Link
        to="/"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all text-sm sm:text-base"
      >
        ⬅ Back to Admin Panel
      </Link>
    </div>
  );
}
